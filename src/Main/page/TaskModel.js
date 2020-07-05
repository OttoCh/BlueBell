export default function TaskModel(tick, taskName, createDate, description, resolution) {
    this.tick = tick;
    this.taskName = taskName;
    this.createDate = createDate;
    this.description = description;
    this.resolution = resolution;
}