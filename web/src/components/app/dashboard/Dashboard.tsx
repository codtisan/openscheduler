import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ReactECharts from 'echarts-for-react';

export const Dashboard = () => {
    const baroption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
        ],
        yAxis: [
            {
                type: 'value',
            },
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                emphasis: {
                    focus: 'series',
                },
                data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
                name: 'Email',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series',
                },
                data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
                name: 'Union Ads',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series',
                },
                data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
                name: 'Video Ads',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series',
                },
                data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
                name: 'Search Engine',
                type: 'bar',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                emphasis: {
                    focus: 'series',
                },
                markLine: {
                    lineStyle: {
                        type: 'dashed',
                    },
                    data: [[{ type: 'min' }, { type: 'max' }]],
                },
            },
            {
                name: 'Baidu',
                type: 'bar',
                barWidth: 5,
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series',
                },
                data: [620, 732, 701, 734, 1090, 1130, 1120],
            },
            {
                name: 'Google',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series',
                },
                data: [120, 132, 101, 134, 290, 230, 220],
            },
            {
                name: 'Bing',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series',
                },
                data: [60, 72, 71, 74, 190, 130, 110],
            },
            {
                name: 'Others',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series',
                },
                data: [62, 82, 91, 84, 109, 110, 120],
            },
        ],
    };

    const option = {
        title: {
            text: 'System Resource',
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['CPU Usage', 'Ram Usage', 'Disk Usage'],
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'CPU Usage',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
                name: 'Ram Usage',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
                name: 'Disk Usage',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410],
            },
        ],
    };

    const pieOption = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: '5%',
            left: 'center',
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2,
                },
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [
                    { value: 1048, name: 'Success' },
                    { value: 735, name: 'Failed' },
                    { value: 580, name: 'Timeout' },
                    { value: 484, name: 'Pending' },
                    { value: 300, name: 'Error' },
                ],
            },
        ],
    };
    return (
        <div className="flex flex-row w-full">
            <div className="size-full mt-2 flex gap-6 flex-col">
                <Card className="w-[96%]">
                    <ReactECharts option={option} />
                </Card>
                <Card className="w-[96%]">
                    <ReactECharts option={baroption} />
                </Card>
            </div>
            <div className="size-full mt-2 flex gap-6 flex-col">
                <div className="flex gap-6 flex-col">
                    <div className="flex flex-row gap-6">
                        <Card className="w-[33%] text-center text-2xl font-bold">
                            <CardHeader>Average latency</CardHeader>
                            <CardContent>300 ms</CardContent>
                        </Card>
                        <Card className="w-[33%] text-center text-2xl font-bold">
                            <CardHeader>Total Failed Tasks</CardHeader>
                            <CardContent>300</CardContent>
                        </Card>
                        <Card className="w-[33%] text-center text-2xl font-bold">
                            <CardHeader>Total Requests</CardHeader>
                            <CardContent>300</CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-row gap-6">
                        <Card className="w-[33%] text-center text-2xl">
                            <CardHeader>Average CPU Usage</CardHeader>
                            <CardContent>50 %</CardContent>
                        </Card>
                        <Card className="w-[33%] text-center text-2xl">
                            <CardHeader>Average Memory Usage</CardHeader>
                            <CardContent>60 %</CardContent>
                        </Card>
                        <Card className="w-[33%] text-center text-2xl">
                            <CardHeader>Uptime Percentage</CardHeader>
                            <CardContent>98 %</CardContent>
                        </Card>
                    </div>
                </div>
                <div className="flex flex-row gap-6">
                    <Card className="w-[50%]">
                        <ReactECharts option={pieOption} />
                    </Card>
                    <Card className="w-[50%]">
                        <ReactECharts option={pieOption} />
                    </Card>
                </div>
            </div>
        </div>
    );
};
