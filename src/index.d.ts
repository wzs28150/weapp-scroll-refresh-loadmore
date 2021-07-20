declare namespace scrollerContext {
    interface itemSize {
        width: number;
        height: number;
    }
    
    type Component = any;
    type Page = any;
    
    type itemSizeFunc<T> = (item: T, index: number) => itemSize
    
    interface options<T> {
        id: string;
        dataKey: string;
        page: Component | Page;
        itemSize: itemSizeFunc<T> | itemSize;
        useInPage?: boolean;
        root?: Page;
    }
    
    interface position {
        left: number;
        top: number;
        width: number;
        height: number;
    }
    
    interface ScrollContext<T> {
        append(list: T[], callback?: () => void): ScrollContext<T>
        appendList(list: T[], callback?: () => void): ScrollContext<T>
        splice(begin: number, deleteCount: number, appendList: T[], callback?: () => void): ScrollContext<T>;
        updateList(beginIndex: number, list: T[], callback?: () => void): ScrollContext<T>
        update(beginIndex: number, list: T[], callback?: () => void): ScrollContext<T>
        destroy(): ScrollContext<T>
        forceUpdate(callback: () => void, reinitSlot: boolean): ScrollContext<T>
        getBoundingClientRect(index: number | undefined): position | position[]
        getScrollTop(): number;
        transformRpx(rpx: number, addPxSuffix?: string): number;
        getViewportItems(inViewportPx: number): T[]
        getList(): T[]
    }
}
declare function createScrollContext<T>(op: scrollerContext.options<T>): scrollerContext.ScrollContext<T>

export = createScrollContext;