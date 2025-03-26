import { nanoid } from 'nanoid';

import { FlowNodeRegistry } from '../../typings';
import iconLoop from '../../assets/icon-loop.svg';

export const LoopNodeRegistry: FlowNodeRegistry = {
  type: 'loop',
  info: {
    icon: iconLoop,
    description:
      'Used to repeatedly execute a series of tasks by setting the number of iterations and logic',
  },
  meta: {
    expandable: false, // disable expanded
  },
  onAdd() {
    return {
      id: `loop_${nanoid(5)}`,
      type: 'loop',
      data: {
        title: 'Loop',
      },
    };
  },
};
