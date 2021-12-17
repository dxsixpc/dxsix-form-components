import { arrayMove } from '@dnd-kit/sortable';
import type { OptionType } from '../../type';

// 选项排序
export const sortOptions = (
  options: OptionType[],
  activeId: string,
  overId: string
) => {
  const oldIndex = options.findIndex((item) => item.id === activeId);
  const newIndex = options.findIndex((item) => item.id === overId);
  return arrayMove(options, oldIndex, newIndex) as OptionType[];
};
