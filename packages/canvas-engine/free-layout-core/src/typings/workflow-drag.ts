import type React from 'react';

import { type PositionSchema } from '@flowgram.ai/utils';
import { type FlowNodeEntity } from '@flowgram.ai/document';
import { PlaygroundDrag, type PlaygroundDragEvent } from '@flowgram.ai/core';

import { type WorkflowLineEntity, type WorkflowPortEntity } from '../entities';

export interface LineEventProps {
  type: 'onDrag' | 'onDragEnd';
  onDragNodeId?: string;
  event?: MouseEvent;
}

interface INodesDragEvent {
  type: string;
  nodes: FlowNodeEntity[];
  startPositions: PositionSchema[];
  altKey: boolean;
  dragEvent: PlaygroundDragEvent;
  triggerEvent: MouseEvent | React.MouseEvent;
  dragger: PlaygroundDrag;
}

export interface NodesDragStartEvent extends INodesDragEvent {
  type: 'onDragStart';
}

export interface NodesDragEndEvent extends INodesDragEvent {
  type: 'onDragEnd';
}

export interface NodesDraggingEvent extends INodesDragEvent {
  type: 'onDragging';
  positions: PositionSchema[];
}

export type NodesDragEvent = NodesDragStartEvent | NodesDraggingEvent | NodesDragEndEvent;

export type onDragLineEndParams = {
  fromPort: WorkflowPortEntity;
  toPort?: WorkflowPortEntity;
  mousePos: PositionSchema;
  line?: WorkflowLineEntity;
  originLine?: WorkflowLineEntity;
  event: PlaygroundDragEvent;
};

export type OnDragLineEnd = (params: onDragLineEndParams) => Promise<void>;
