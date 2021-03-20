import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { todosSelector } from './todosSlice';

const unsafeSelector = createDraftSafeSelector(todosSelector, state => state.todos);
