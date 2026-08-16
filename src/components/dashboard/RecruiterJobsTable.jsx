"use client";

import { Eye, PencilToSquare, TrashBin } from "@gravity-ui/icons";
import { Table, Chip, Avatar } from "@heroui/react";

const columns = [
  { id: "title", name: "Job Title" },
  { id: "type", name: "Type" },
  { id: "location", name: "Location" },
  { id: "status", name: "Status" },
  { id: "actions", name: "Actions" },
];

const statusColorMap = {
  active: "success",
  pending: "warning",
  rejected: "danger",
  interviewing: "primary",
};

export default function RecruiterJobsTable({ jobs = [] }) {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Recruiter Jobs and Candidates Table">
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.id}
                id={column.id}
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>

          <Table.Body
            items={jobs}
            renderEmptyState={() => (
              <div className="py-8 text-center text-gray-400">
                No candidates found.
              </div>
            )}
          >
            {(item) => (
              <Table.Row
                key={item.id || item._id}
                id={item.id || item._id}
              >
                <Table.Cell>
                  <div className="flex items-center gap-3">
                    <Avatar
                      className="w-8 h-8 bg-zinc-700"
                      size="sm"
                      src={item.avatar}
                    />

                    <span className="font-semibold text-white">
                      {item.name || item.title || "Unknown"}
                    </span>
                  </div>
                </Table.Cell>

                <Table.Cell>
                  {item.jobType || "N/A"}
                </Table.Cell>

                <Table.Cell>
                  {item.location.city || "N/A"}
                </Table.Cell>

                <Table.Cell>
                  <Chip
                    color={statusColorMap[item.status] || "default"}
                    size="sm"
                    variant="flat"
                    className="capitalize"
                  >
                    {item.status || "active"}
                  </Chip>
                </Table.Cell>

                <Table.Cell>
                  <div className='flex items-center gap-2'>
                    <Eye/>
                  <PencilToSquare/>
                  <TrashBin/>
                  </div>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}