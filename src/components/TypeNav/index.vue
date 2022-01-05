<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveTpyeNav" @mouseenter="enterTpyeNav">
        <h2 class="all">全部商品分类</h2>
        <div class="sort" @click.prevent="goSearch" v-show="showTypeNav">
          <div class="all-sort-list2">
            <div
              class="item"
              v-for="(category, index) in categoryList"
              :key="category.id"
            >
              <h3
                @mouseenter="changeIndex(index)"
                :class="{
                  hover_bcg: currentIndex == index
                }"
              >
                <a
                  :data-categoryName="category.categoryName"
                  :data-category1Id="category.categoryId"
                  href=""
                  >{{ category.categoryName }}</a
                >
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="categoryTwo in category.categoryChild"
                    :key="categoryTwo.categoryId"
                  >
                    <dt>
                      <a
                        href=""
                        :data-categoryName="categoryTwo.categoryName"
                        :data-category2Id="categoryTwo.categoryId"
                        >{{ categoryTwo.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="categoryChildThree in categoryTwo.categoryChild"
                        :key="categoryChildThree.categoryId"
                      >
                        <a
                          :data-categoryName="categoryChildThree.categoryName"
                          :data-category3Id="categoryChildThree.categoryId"
                          href=""
                          >{{ categoryChildThree.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import throttle from 'lodash/throttle';
export default {
  name: 'TypeNav',
  data() {
    return {
      currentIndex: -1,
      showTypeNav: false
    };
  },
  mounted() {
    if (this.$route.path == '/home') this.showTypeNav = true;
  },
  methods: {
    // 改变当前索引值+节流
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 20),
    // 去搜索页
    goSearch(e) {
      let {
        category1id,
        category2id,
        category3id,
        categoryname
      } = e.target.dataset;

      if (categoryname) {
        let location = {
          name: 'search',
          query: {
            categoryName: categoryname
          }
        };
        if (category1id) {
          location.query.category1Id = category1id;
        } else if (category2id) {
          location.query.category2Id = category2id;
        } else {
          location.query.category3Id = category3id;
        }
        // console.log(location);
        let { params } = this.$route;
        if (params) location.params = params;
        this.$router.push(location);
      }
    },
    // 离开typenav
    leaveTpyeNav() {
      this.currentIndex = -1;
      if (this.$route.path != '/home') this.showTypeNav = false;
    },
    // 进入typenav
    enterTpyeNav() {
      if (this.$route.path != '/home') this.showTypeNav = true;
    }
  },
  computed: {
    ...mapState({
      categoryList(state) {
        return state.home.categoryList;
      }
    })
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
.hover_bcg {
  background-color: skyblue;
}
</style>