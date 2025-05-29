import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { IProjectData } from '@/interfaces/project-table';
import type { Row } from '@tanstack/react-table';

export interface EditProjectProps {
    rowData: Row<IProjectData>;
}

export const EditProjectSection = ({ rowData }: EditProjectProps) => {
    return (
        <div className="ml-4 flex flex-col gap-6">
            <div className="flex flex-row gap-5 max-w-[80%] items-center">
                <Label>Name</Label>
                <Input value={rowData.getValue('name')} />
            </div>
            <div className="flex flex-col gap-5 max-w-[80%]">
                <Label>Description</Label>
                <Textarea className="h-40" value={rowData.getValue('description')} />
            </div>
        </div>
    );
};
