<template>
    <div class="filters">
        <div class="filter-item">
            <label for="queryInput" class="input-label">Search Query:</label>
            <input id="queryInput" type="text" v-model="query" @input="applyFilters" />
        </div>
        <div class="filter-item">
            <label for="adultSwitch" class="switch-label">Include Adult:</label>
            <input id="adultSwitch" type="checkbox" v-model="includeAdult" @change="applyFilters" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilterMovie',
    data() {
        return {
            query: '',
            includeAdult: false,
        };
    },
    methods: {
        applyFilters() {
            const filters = {
                query: this.query,
                includeAdult: this.includeAdult,
            };
            this.$emit('filters-applied', filters);
        },
    },
};
</script>
  
<style scoped>
.filters {
    display: flex;
    align-items: center;
    padding: 2em;
}

.filter-item {
    margin-right: 10px;
}

.input-label {
    margin-right: 5px;
}
</style>
  