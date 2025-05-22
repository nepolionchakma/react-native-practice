import {types, SnapshotIn} from 'mobx-state-tree';

// Student model
const Student = types.model('Student', {
  id: types.identifierNumber,
  name: types.string,
  age: types.number,
  subjects: types.array(types.string),
});

// Student store
export const StudentStore = types
  .model('StudentStore', {
    students: types.array(Student),
  })
  .actions(self => ({
    addStudent(student: SnapshotIn<typeof Student>) {
      self.students.push(student);
    },
  }));

export type IStudentStore = typeof StudentStore.Type;
