import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IAMPolicies, type Policy } from '@/constants/iam-policy';
import type { IRoleData } from '@/interfaces/role-table';
import type { Row } from '@tanstack/react-table';

export interface EditRoleProps {
    rowData: Row<IRoleData>;
}

export const EditRoleSection = ({ rowData }: EditRoleProps) => {
    return (
        <div className="ml-4 flex flex-col gap-8">
            <div className="flex flex-row gap-5 max-w-[80%] items-center">
                <Label>Name</Label>
                <Input />
            </div>
            {Object.keys(IAMPolicies).map((iamPolicy: string) => {
                const resource: Policy = IAMPolicies[iamPolicy as keyof typeof IAMPolicies];
                return (
                    <div className="flex flex-row gap-2 max-w-[80%] items-center">
                        <Label>{resource.name}:</Label>
                        {resource.policies.map((policy: string) => {
                            const hasPolicy = (rowData.getValue('logPolicy') as string[]).includes(policy.toLowerCase());
                            return (
                                <div className="flex flex-row items-center gap-2">
                                    <Label>{policy}</Label>
                                    <Checkbox checked={hasPolicy} />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
