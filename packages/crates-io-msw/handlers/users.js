import addEmail from './emails/add.js';
import confirmEmail from './emails/confirm.js';
import deleteEmail from './emails/delete.js';
import resendEmail from './emails/resend.js';
import updateEmail from './emails/update.js';
import getUser from './users/get.js';
import me from './users/me.js';
import updateUser from './users/update.js';

export default [getUser, updateUser, resendEmail, me, confirmEmail, addEmail, deleteEmail, updateEmail];
