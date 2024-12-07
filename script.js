const data = [
    { text: "Learn JavaScript", category: "category1" },
    { text: "HTML Basics", category: "category1" },
    { text: "CSS for Beginners", category: "category2" },
    { text: "Responsive Design", category: "category2" },
    { text: "Advanced JavaScript", category: "category1" }
];

function performSearch() {
    const searchBox = document.getElementById("searchBox");
    const filterSelect = document.getElementById("filterSelect");
    const results = document.getElementById("results");

    const query = searchBox.value.toLowerCase();
    const filter = filterSelect.value;

    const filteredData = data.filter(item => {
        const matchesQuery = item.text.toLowerCase().includes(query);
        const matchesFilter = filter === "all" || item.category === filter;
        return matchesQuery && matchesFilter;
    });

    results.innerHTML = filteredData.map(item => `<div class="result-item">${item.text}</div>`).join("");

    if (filteredData.length === 0) {
        results.innerHTML = "<p>No results found.</p>";
    }
}
