function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      li.onclick = () => li.classList.toggle("done");
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
  }
  
  function setReminder() {
    const note = document.getElementById("reminderText").value;
    const time = document.getElementById("reminderTime").value;
    const message = document.getElementById("reminderMessage");
  
    if (!note || !time) {
      message.textContent = "Please enter both note and time!";
      return;
    }
  
    const now = new Date();
    const [hours, minutes] = time.split(":");
    const reminderTime = new Date();
    reminderTime.setHours(hours);
    reminderTime.setMinutes(minutes);
    reminderTime.setSeconds(0);
  
    const timeDiff = reminderTime.getTime() - now.getTime();
  
    if (timeDiff > 0) {
      message.textContent = `Reminder set: "${note}" at ${time}`;
      setTimeout(() => {
        alert(`Reminder: ${note}`);
      }, timeDiff);
    } else {
      alert("Reminder time must be in the future!");
    }
  }
  
