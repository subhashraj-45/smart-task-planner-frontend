// src/utils/planUtils.js
/**
 * Converts a structured task plan into a clean, readable text format.
 * @param {string} goal - The main goal.
 * @param {Array} tasks - The array of task objects.
 * @returns {string} The formatted text for copying.
 */
export const formatPlanForCopy = (goal, tasks) => {
  let text = `Goal: ${goal}\n\n`;

  tasks.forEach((task, index) => {
    // 1. Task Title
    text += `${index + 1}. ${task.task}\n`;

    // 2. Deadline
    if (task.deadline) {
      text += `   - Deadline: ${task.deadline}\n`;
    }

    // 3. Dependencies
    if (task.depends_on && task.depends_on.length > 0) {
      // Joins dependencies into a list like: (task-1, task-2)
      const dependencies = task.depends_on.join(', ');
      text += `   - Depends on: (${dependencies})\n`;
    }
  });

  return text.trim(); 
};