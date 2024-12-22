import { promises as fs } from 'fs';
import { Metadata } from 'next';
import path from 'path';
import { z } from 'zod';

import { Typography } from '@/components/ui/typography';
import { columns } from '@/features/tasks/components/columns';
import { DataTable } from '@/features/tasks/components/data-table';
import { taskSchema } from '@/features/tasks/data/schema';

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'A task and issue tracker build using Tanstack Table.',
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/features/tasks/data/tasks.json')
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const TaskPage = async () => {
  const tasks = await getTasks();

  return (
    <section>
      <div className='p-2 md:p-4'>
        <Typography.H3>Tasks</Typography.H3>
        <Typography.Muted className='pb-4'>
          Manage your tasks and issues
        </Typography.Muted>
        <DataTable data={tasks} columns={columns} />
      </div>
    </section>
  );
};

export default TaskPage;
