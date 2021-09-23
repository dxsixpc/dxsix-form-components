/**
 * Default CSS LESS SCSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
 declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

interface SvgrComponent
  extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare module 'react-sortablejs' {
  import React from 'react';
  import Sortable from 'sortablejs';

  export interface SortableProps<ItemData, ListProps> {
    options?: Sortable.Options;
    onChange?: (
      list: ItemData[],
      sortable: Sortable,
      event: Sortable.SortableEvent
    ) => void;
    tag?: string | React.ComponentType<ListProps>;
    style?: React.CSSProperties;
    className?: string;
  }
  export default class SortableComponent<
    ItemData,
    ListProps
  > extends React.Component<SortableProps<ItemData, ListProps>> {}
}

// eslint-disable-next-line
declare interface AnyObject {
  [key: string]: any;
}

// eslint-disable-next-line
declare type Any = any;
