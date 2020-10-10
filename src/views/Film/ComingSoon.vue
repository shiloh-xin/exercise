<template>
    <div>
        <FilmList
            :list="list"
            :type="type"
            :key="'film' + list.length"
        ></FilmList>
    </div>
</template>

<script>
import { comingSoonListData } from '@/api/api';
import FilmList from '@/components/FilmList';
export default {
    data: () => {
        return {
            pageNum: 1,
            list: [],
            type: 2,
        };
    },
    async mounted() {
        let ret = await comingSoonListData(this.pageNum);
        this.list = ret.data.data.films;
    },
    components: {
        FilmList,
    },
};
</script>
