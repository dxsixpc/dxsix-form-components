import type { DragEndEvent } from '@dnd-kit/core';
import {
  closestCenter,
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import React from 'react';
import type { OptionsConfigType, OptionType } from '../../type';
import Option from './Option';
import { sortOptions } from './utils';

interface OptionsContainerProps {
  optionsConfig: OptionsConfigType<'allType'>;
  onOptionsConfigChange: (value: OptionsConfigType<'allType'>) => void;
}

// 选项容器
const OptionsContainer: React.FC<OptionsContainerProps> = (props) => {
  const { optionsConfig, onOptionsConfigChange } = props;
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));
  const { type, options } = optionsConfig;

  // 拖动结束
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id && over?.id !== undefined) {
      onOptionsConfigChange({
        ...optionsConfig,
        options: sortOptions(options, active.id, over?.id)
      });
    }
  };

  // 删除选项
  const onRemoveOption = (id: string) => {
    const newOptions = options.filter((item) => item.id !== id);
    onOptionsConfigChange({
      ...optionsConfig,
      options: newOptions
    });
  };

  // 更新选项
  const onOptionChange = (option: OptionType) => {
    const newOptions = [...options];
    const newOptionIndex = options.findIndex((item) => item.id === option.id);
    if (newOptionIndex !== -1) newOptions[newOptionIndex] = option;
    onOptionsConfigChange({
      ...optionsConfig,
      options: newOptions
    });
  };

  // 更新选项
  const onCheckedChange = (id: string) => {
    const newOptions = optionsConfig?.options.map((option: OptionType) => ({
      ...option,
      checked:
        optionsConfig.type === 'Radio'
          ? option.id === id
            ? !option.checked
            : false
          : option.id === id
          ? !option.checked
          : option.checked
    }));
    onOptionsConfigChange({
      ...optionsConfig,
      options: newOptions
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={options} strategy={verticalListSortingStrategy}>
        {options.map((option) => (
          <Option
            key={option.id}
            type={type}
            option={option}
            onOptionChange={onOptionChange}
            onCheckedChange={onCheckedChange}
            onRemoveOption={onRemoveOption}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default OptionsContainer;
