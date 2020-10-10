<template>
    <div class="list">
        <!-- loading导入 -->
        <Loading v-if="loading"></Loading>
        <!-- 展示数据 -->
        <div
            class="item"
            v-for="(item, index) in list"
            :key="index"
            @click="goDetail(item.filmId)"
        >
            <div class="left">
                <img :src="item.poster" />
            </div>
            <div class="middle">
                <div>
                    {{ item.name }}
                    <span class="item">{{ item.filmType.name }}</span>
                </div>
                <div v-if="type == 1">
                    <span>观众评分 </span>
                    <span class="grade">{{ item.grade }}</span>
                </div>
                <div>主演：{{ item.actors | parseActors }}</div>
                <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
            </div>
            <div class="right">
                <span v-if="type == 1">购票</span>
                <span v-else>预购</span>
            </div>
        </div>
    </div>
</template>

<script>
// loading导入
import Loading from '@/components/Loading';
export default {
    data() {
        return {
            loading: true,
        };
    },
    props: ['list', 'type'],
    components: {
        Loading,
    },
    created() {
        // 判断数据是否获取到，获取到之后就去除loading组件
        if (this.list.length > 0) {
            this.loading = false;
        } else {
            this.loading = true;
        }
    },
    updated() {
        // 判断数据是否获取到，获取到之后就去除loading组件
        if (this.list.length > 0) {
            this.loading = false;
        } else {
            this.loading = true;
        }
    },
    // 处理演员的数据，将主演的数据从数组的形式转化成字符串形式以便输出
    filters: {
        parseActors: function(value) {
            let actors = '';
            value.forEach(element => {
                actors += element.name + ' ';
            });
            return actors;
        },
    },
    methods: {
        goDetail: function(filmId) {
            this.$router.push({ name: 'detail', params: { filmId } });
        },
    },
};
</script>

<style lang="scss" scoped>
.list {
    margin-bottom: 50px;

    .item {
        margin-top: 15px;
        padding-bottom: 15px;
        display: flex;
        color: #797d82;
        font-size: 13px;
        border-bottom: 1px solid #ededed;

        .left {
            width: 77px;
            height: 100px;
            margin-left: 20px;
            img {
                width: 66px;
                height: 100%;
            }
        }

        .middle {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 55%;
            padding: 10px 0;

            div:nth-of-type(1) {
                color: #191a1b;
                font-size: 16px;
                display: flex;

                .item {
                    font-size: 9px;
                    color: #fff;
                    background-color: #d2d6dc;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 2px;
                    border-radius: 2px;
                    margin: 4px 0 0 7px;
                }
            }

            div:nth-of-type(2) {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            div:nth-of-type(3) {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .grade {
                color: #ffb232;
                font-size: 14px;
            }
        }

        .right {
            width: 15%;
            display: flex;
            align-items: center;
            margin-left: 22px;

            span {
                border: 1px solid #ff5f16;
                background: white;
                color: #ff5f16;
                border-radius: 2px;
                height: 25px;
                line-height: 25px;
                font-size: 13px;
                width: 50px;
                text-align: center;
            }
        }
    }
}
</style>
