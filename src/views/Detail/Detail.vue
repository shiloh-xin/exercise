<template>
    <div class="detail" v-cloak>
        <div class="img">
            <img :src="film.poster" />
        </div>
        <div class="film-detail">
            <div class="box">
                <div class="film-name">
                    {{ film.name }}
                    <!-- <span class="item">{{ film.filmType.name }}</span> -->
                </div>
                <div class="film-grade" v-if="open">
                    <span class="grade">{{ film.grade }}</span>
                    <span class="grade-text"> 分</span>
                </div>
            </div>
            <div class="film-detail-all">{{ film.category }}</div>
            <div class="film-detail-all">
                {{ film.premiereAt | parsePremiereAt }}上映
            </div>
            <div class="film-detail-all">
                {{ film.nation }} | {{ film.runtime }} 分钟
            </div>
            <div
                :class="{
                    filmDetailall: isfilm,
                    hidde: ishidde,
                    filmsynopsis: isfilmsynopsis,
                }"
                class="film-detail-all"
            >
                {{ film.synopsis }}
            </div>
            <div class="toggle" @click="handerClick">
                <img
                    :class="{ upper: isupper }"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
                />
            </div>
        </div>
    </div>
</template>

<script>
import { movieDetailData } from '@/api/api';
// 引入mement
import moment from 'moment';
export default {
    data() {
        return {
            isfilm: true,
            film: {},
            ishidde: true,
            isupper: false,
            isfilmsynopsis: true,
            open: false,
        };
    },
    async mounted() {
        let ret = await movieDetailData(this.$route.params.filmId);
        this.film = ret.data.data.film;
        console.log(ret);
        this.type = this.$route.params.type;
        if (ret.data.data.film.grade) {
            this.open = true;
        }
    },
    methods: {
        handerClick() {
            this.ishidde = !this.ishidde;
            this.isupper = !this.isupper;
        },
    },
    filters: {
        parsePremiereAt: function(value) {
            // 时间戳的单位是秒，需要乘以1000转化成毫秒进行处理
            return moment(value * 1000).format('YYYY-MM-DD');
        },
    },
};
</script>

<style lang="scss" scoped>
[v-cloak] {
    display: none;
}
.detail {
    .img {
        width: 100%;
        height: 236px;

        img {
            width: 100%;
            height: 100%;
        }
    }
    .film-detail {
        padding: 0 15px;
        background-color: #fff;
        .filmsynopsis {
            transition: max-height 0.7s ease;
        }
        .hidde {
            max-height: 34px !important;
        }
        .box {
            display: flex;
            justify-content: space-between;

            .film-name {
                color: #191a1b;
                font-size: 18px;
                height: 24px;
                line-height: 24px;
                margin-right: 7px;
                margin-top: 10px;
                line-height: 24px;

                .item {
                    font-size: 9px;
                    color: #fff;
                    background-color: #d2d6dc;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 2px;
                    border-radius: 2px;
                    display: inline-block;
                }
            }
            .film-grade {
                width: calc(100% - 250px);
                text-align: right;
                color: #ffb232;
                margin-top: 10px;

                .grade {
                    font-size: 18px;
                    font-style: italic;
                }
                .grade-text {
                    font-size: 10px;
                }
            }
        }
        .toggle {
            text-align: center;
            display: block;
            height: auto;
            width: 20px;
            margin: auto;
            line-height: normal;
            img {
                width: 8px;
                margin: auto;
            }
            .upper {
                -webkit-transform: rotate(180deg);
                -ms-transform: rotate(180deg);
                transform: rotate(180deg);
            }
        }
        .film-detail-all {
            font-size: 13px;
            color: #797d82;
            margin-top: 4px;
        }
        .filmDetailall {
            font-size: 13px;
            color: #797d82;
            margin-top: 4px;
            max-height: 150px;
            overflow: hidden;
        }
        .film-detail-all:nth-of-type(5) {
            margin-top: 13px;
        }
    }
}
</style>
