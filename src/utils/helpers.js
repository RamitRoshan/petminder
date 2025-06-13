export function groupRemindersByTime(reminders) {
  
  const slots = {
    "Morning Walk": [], 
    "Evening Walk": [], 
    "Breakfast": [], 
    "Lunch": [], 
    "Vet visit": [],
   };

  reminders.forEach((r) => {
    const hour = parseInt(r.time.split(":"[0]), 10);
    if (hour < 8) slots["Morning Walk"].push(r);
    else if (hour < 10) slots["Breakfast"].push(r);
    else if (hour < 12) slots["Vet visit"].push(r);
    else if (hour < 14) slots["Lunch"].push(r);
    else if (hour < 17) slots["Afternoon Walk"].push(r);
    else slots["Evening Walk"].push(r);
  });

  return slots;


}
