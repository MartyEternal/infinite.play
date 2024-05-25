document.getElementById('show-more-btn').addEventListener('click', function () {
    const rulesList = document.getElementById('rules-list');
    if (rulesList.classList.contains('hidden')) {
        rulesList.classList.remove('hidden');
        this.textContent = 'Show Less';
    } else {
        rulesList.classList.add('hidden');
        this.textContent = 'Show More';
    }
});