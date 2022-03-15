import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { ProjectSchema } from '../models/Project';
import { SprintSchema } from '../models/Sprint';
import { TaskSchema } from '../models/Task';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Projects = mongoose.model('Project', ProjectSchema)
  Sprints = mongoose.model('Sprint', SprintSchema)
  Tasks = mongoose.model('Task', TaskSchema)
}

export const dbContext = new DbContext()
