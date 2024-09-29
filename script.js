//your JS code here. If required.
document
        .getElementById("removeButton")
        .addEventListener("click", function () {
          const colorSelect = document.getElementById("colorSelect");
          const selectedIndex = colorSelect.selectedIndex;

          if (selectedIndex !== -1) {
            colorSelect.remove(selectedIndex);
          } else {
            alert("Please select a color to remove.");
          }
        });