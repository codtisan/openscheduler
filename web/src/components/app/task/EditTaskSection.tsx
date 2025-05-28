import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { ITaskRecord } from '@/interfaces/task/task-table';
import type { Row } from '@tanstack/react-table';

export interface EditTaskProps {
    rowData: Row<ITaskRecord>;
}

export const EditTaskSection = ({ rowData }: EditTaskProps) => {
    return (
        <div className="ml-4 flex flex-col gap-6">
            <div className="flex flex-row gap-5 max-w-[80%] items-center">
                <Label>Name</Label>
                <Input value={rowData.getValue('name')} />
            </div>
            <div className="flex flex-row gap-5 max-w-[80%] items-center">
                <Label>Description</Label>
                <Input value={rowData.getValue('description')} />
            </div>
            <div className="flex flex-row gap-5 max-w-[80%] items-center">
                <Label>Target</Label>
                <Input value={rowData.getValue('target')} />
            </div>
        </div>
    );
};
