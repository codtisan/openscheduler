import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { HTTPMethods, HTTPStatusCode, TaskType } from '@/constants/task-type';
import Editor from '@monaco-editor/react';
import React from 'react';

function CreateTaskSection() {
    const [selectedType, setSelectedType] = React.useState<string | null>(null);

    const handleSelectedType = (taskType: string) => {
        setSelectedType(taskType);
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="ml-4 w-[16%]">
                    Create Task
                </Button>
            </DialogTrigger>
            <DialogContent className="min-w-[30vw]">
                <DialogHeader>
                    <DialogTitle>Create Task</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="type" className="text-right">
                            Type
                        </Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-50">
                                    Select a type
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-50">
                                {Object.values(TaskType).map((taskType: string) => {
                                    return (
                                        <DropdownMenuItem key={taskType} onClick={() => handleSelectedType(taskType)}>
                                            {taskType}
                                        </DropdownMenuItem>
                                    );
                                })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Textarea placeholder="Put your description here" className="h-24" />
                    </div>
                    {selectedType === 'HTTP' || selectedType === 'Python' ? (
                        <>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="target" className="text-right">
                                    Target URL
                                </Label>
                                <Input id="target" className="col-span-3" />
                            </div>
                            <div className="flex flex-row gap-10">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="interval" className="text-right">
                                        Interval
                                    </Label>
                                    <Input id="target" className="col-span-3" type="number" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="retry" className="text-right">
                                        Retry
                                    </Label>
                                    <Input id="target" className="col-span-3" type="number" />
                                </div>
                            </div>
                            {selectedType === 'HTTP' && (
                                <div className="flex flex-row gap-10">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="method" className="text-right">
                                            Method
                                        </Label>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" className="w-40">
                                                    Select a method
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-40">
                                                {HTTPMethods.map((method: string) => {
                                                    return <DropdownMenuItem key={method}>{method}</DropdownMenuItem>;
                                                })}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="check" className="text-right">
                                            Check
                                        </Label>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" className="w-40">
                                                    Select a condition
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-40">
                                                {HTTPStatusCode.map((method: number) => {
                                                    return <DropdownMenuItem key={method}>{method}</DropdownMenuItem>;
                                                })}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            )}
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="timeout" className="text-right">
                                    Timeout
                                </Label>
                                <Input id="timeout" className="col-span-3" type="number" />
                            </div>
                            {selectedType === 'HTTP' ? (
                                <div className="flex flex-col gap-3 h-full">
                                    <Label htmlFor="json" className="text-right">
                                        Request Body
                                    </Label>
                                    <Editor height="20vh" language="json" theme="vs-dark" />
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3 h-full">
                                    <Label htmlFor="json" className="text-right">
                                        Request Body
                                    </Label>
                                    <Editor height="20vh" language="python" theme="vs-dark" />
                                </div>
                            )}
                        </>
                    ) : selectedType === null ? null : (
                        <>
                            <div className="flex flex-col gap-3 h-full">
                                <Label htmlFor="shell" className="text-right">
                                    Shell
                                </Label>
                                <Editor height="30vh" language="shell" defaultValue="" theme="vs-dark" />
                            </div>
                        </>
                    )}
                </div>
                <DialogFooter>
                    <Button variant="ghost">Cancel</Button>
                    <Button type="submit">Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CreateTaskSection;
