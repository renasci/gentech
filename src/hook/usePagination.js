import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

export const usePagination = (countPerPage) => {
  const [allItems, setAllItems] = useState([]);
  const [activeItems, setActiveItems] = useState([]);
  const ref = useRef();
  const refAllItems = useRef();
  const refActiveItems = useRef();

  useLayoutEffect(()=> {
    refAllItems.current = allItems;
    refActiveItems.current = activeItems;
  }, [allItems, activeItems]);

  useEffect(() => {
    let newItems = allItems.slice(0, countPerPage);
    setActiveItems(newItems);
  }, [allItems]);

  const TriggerComponent = useCallback(() => {
    return (
      <div ref={ref}></div>
    )
  }, []);

  const triggerHandle = useCallback(([entry]) => {
    let allItems = () => refAllItems.current;
    let activeItems = () => refActiveItems.current;

    if(allItems().length === 0 
      || allItems().length === activeItems().length
      || !entry.isIntersecting) {
      return;
    }

    let newLength = Math.min(allItems().length, activeItems().length + countPerPage);
    let newItems = allItems().slice(0, newLength);
    setActiveItems(newItems);
  },[])

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(triggerHandle, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
 
  return [TriggerComponent, activeItems, setAllItems];
}