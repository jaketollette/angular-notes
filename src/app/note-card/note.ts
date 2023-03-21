export class Note {
  constructor(
    public note_id: number,
    public note_description: string,
    public due_date: Date,
    public assignee: string,
    public attachments: string,
    public priority_level: string,
    public comments: string,
    public note_status: string
  ) {}
}
