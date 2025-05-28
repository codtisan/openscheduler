import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const nodes = [
    {
        id: '1',
        position: { x: 50, y: 60 },
        data: { label: 'Hello' },
    },
];

export const WorkflowEditor = () => {
    return (
        <div className="h-[98%] w-full">
            <ReactFlow className="border" nodes={nodes}>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
};
