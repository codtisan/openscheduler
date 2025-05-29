import { Button } from '@/components/ui/button';
import { TaskRecordSample } from '@/constants/task';
import type { ITaskRecord } from '@/interfaces/task/task-table';
import { Plus } from 'lucide-react';

export const WorkflowTaskList = () => {
    return (
        <div className="w-[14%] h-[86vh] border overflow-y-scroll">
            {TaskRecordSample.map((taskRecord: ITaskRecord) => {
                return (
                    <div className="h-26 hover:bg-sky-100 flex flex-col items-center justify-center">
                        <div>{taskRecord.name}</div>
                        <div>
                            <Button variant="ghost">
                                <Plus />
                            </Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
