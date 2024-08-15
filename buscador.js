function filterItems() {
            var input, filter, container, items, i, txtValue;
            input = document.getElementById('searchInput');
            filter = input.value.toUpperCase();
            container = document.getElementById('itemsContainer');
            items = container.getElementsByClassName('item');

            for (i = 0; i < items.length; i++) {
                txtValue = items[i].textContent || items[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    items[i].style.display = "";
                } else {
                    items[i].style.display = "none";
                }
            }
        }