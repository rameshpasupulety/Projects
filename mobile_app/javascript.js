// script.js

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });
  // Show the selected section
  document.getElementById(sectionId).style.display = 'block';
}

function calculate() {
  const fromDate = new Date(document.getElementById('from-date').value);
  const toDate = new Date(document.getElementById('to-date').value);
  const dob = new Date(document.getElementById('dob').value);

  if (!isValidDate(fromDate) || !isValidDate(toDate) || !isValidDate(dob)) {
    alert('Please enter valid dates.');
    return;
  }

  displayAgeAndDifference(fromDate, toDate, dob);
  showSection('count'); // Show the "count" section after calculation
}

function isValidDate(date) {
  return !isNaN(date.getTime());
}

function displayAgeAndDifference(fromDate, toDate, dob) {
  const age = calculateAge(dob);
  const difference = dateDiffInDays(fromDate, toDate);
  const timeLived = dateDiffInDays(dob, toDate);
  const timeLeft = dateDiffInDays(toDate, new Date());

  document.getElementById('your-age').textContent = `Your age: ${age} years`;
  document.getElementById('total-time').textContent = `Total time: ${difference} days`;
  document.getElementById('time-died').textContent = `Time lived: ${timeLived} days`;
  document.getElementById('time-leave').textContent = `Time left: ${timeLeft} days`;
}

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}


// Function to save dates to local storage
function saveDates() {
  const fromDate = document.getElementById('from-date').value;
  const toDate = document.getElementById('to-date').value;
  const dob = document.getElementById('dob').value;

  localStorage.setItem('fromDate', fromDate);
  localStorage.setItem('toDate', toDate);
  localStorage.setItem('dob', dob);
}

// Function to load dates from local storage
function loadDates() {
  const fromDate = localStorage.getItem('fromDate');
  const toDate = localStorage.getItem('toDate');
  const dob = localStorage.getItem('dob');

  document.getElementById('from-date').value = fromDate || '';
  document.getElementById('to-date').value = toDate || '';
  document.getElementById('dob').value = dob || '';
}

// Load dates when the page loads
window.onload = function() {
  loadDates();
};

// Listen for changes in date input fields and save dates to local storage
document.getElementById('from-date').addEventListener('change', saveDates);
document.getElementById('to-date').addEventListener('change', saveDates);
document.getElementById('dob').addEventListener('change', saveDates);









document.addEventListener("DOMContentLoaded", function() {
    // Function to save note with image
    function saveNoteWithImage() {
        var note = document.getElementById("noteInput").value;
        var imageInput = document.getElementById("imageInput");
        var savedContentContainer = document.getElementById("savedContent");

        if (note.trim() !== "") {
            var newContentElement = document.createElement("div");
            newContentElement.classList.add("saved-content");

            // Add note text
            var noteElement = document.createElement("div");
            noteElement.textContent = note;
            newContentElement.appendChild(noteElement);

            // Add image if provided
            if (imageInput.files && imageInput.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    var imageElement = document.createElement("img");
                    imageElement.classList.add("saved-image");
                    imageElement.src = e.target.result;
                    newContentElement.appendChild(imageElement);
                };
                reader.readAsDataURL(imageInput.files[0]);
            }

            // Add edit button
            var editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("edit-button");
            editButton.addEventListener("click", function() {
                editNoteText(noteElement);
            });
            newContentElement.appendChild(editButton);

            // Add delete button
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener("click", function() {
                moveNoteToTrash(newContentElement);
            });
            newContentElement.appendChild(deleteButton);

            savedContentContainer.appendChild(newContentElement);

            // Clear inputs after saving
            document.getElementById("noteInput").value = "";
            imageInput.value = "";
        } else {
            alert("Please enter a note before saving.");
        }
    }

    // Function to edit note text
    function editNoteText(noteElement) {
        var noteTextElement = noteElement.querySelector("div");
        var currentNoteText = noteTextElement.textContent;
        var editedNoteText = prompt("Edit Note", currentNoteText);
        if (editedNoteText !== null && editedNoteText.trim() !== "") {
            noteTextElement.textContent = editedNoteText;
        }
    }

    // Function to move note to trash
    function moveNoteToTrash(noteElement) {
        var trashContentContainer = document.getElementById("trashContent");
        noteElement.classList.remove("saved-content");
        noteElement.classList.add("trash-content");
        noteElement.querySelector(".edit-button").remove(); // Remove the edit button
        noteElement.querySelector(".delete-button").remove(); // Remove the delete button
        var restoreButton = document.createElement("button");
        restoreButton.textContent = "Restore";
        restoreButton.classList.add("restore-button");
        restoreButton.addEventListener("click", function() {
            restoreNoteFromTrash(noteElement);
        });
        noteElement.appendChild(restoreButton);
        trashContentContainer.appendChild(noteElement);
    }

    // Function to restore note from trash
    function restoreNoteFromTrash(noteElement) {
        var savedContentContainer = document.getElementById("savedContent");
        noteElement.classList.remove("trash-content");
        noteElement.classList.add("saved-content");
        noteElement.querySelector("button").remove(); // Remove the restore button
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-button");
        editButton.addEventListener("click", function() {
            editNoteText(noteElement);
        });
        noteElement.appendChild(editButton);
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            moveNoteToTrash(noteElement);
        });
        noteElement.appendChild(deleteButton);
        savedContentContainer.appendChild(noteElement);
    }

    // Save note with image when the save button is clicked
    document.getElementById("saveNoteButton").addEventListener("click", function() {
        saveNoteWithImage();
    });

    // Add image when the add image button is clicked
    document.getElementById("addImageButton").addEventListener("click", function() {
        document.getElementById("imageInput").click();
    });
});




