<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
    <v-layout row wrap> 
      <title-category title="Paling Hangat"/>
    </v-layout>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-facebook"
            title="100+"
            sub-title="Likes"
            color="indigo"      
          >
          </mini-statistic>  
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-google"
            title="150+"
            sub-title="Connections"
            color="red"      
          >
          </mini-statistic>           
        </v-flex>          
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-twitter"
            title="200+"
            sub-title="Followers"
            color="light-blue"      
          >
          </mini-statistic>            
        </v-flex>        
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-instagram"
            title="50+"
            sub-title="Shots"
            color="purple"      
          >
          </mini-statistic>             
        </v-flex>   
        <!-- Circle statistic -->
        <v-flex lg4 sm12 xs12 v-for="(item,index) in trending" :key="'c-trending'+index">
          <circle-statistic
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :icon="item.icon.label"
            :color="item.linear.color"
            :value="item.linear.value"
          >
          </circle-statistic>            
        </v-flex>    
        <v-flex lg6 sm12 xs12>
          <v-widget title="Activities" contentBg="white">
            <div slot="widget-content">
              <ol class="timeline timeline-activity timeline-point-sm timeline-content-right">
                <li class="timeline-block" v-for="(item, index) in activity" :key="index">
                  <div class="timeline-point">
                    <v-circle dot large :color="item.color"></v-circle>
                  </div>
                  <div class="timeline-content">
                    <time datetime="2018" class="subheading">{{item.timeString}}</time>
                    <div class="py-2 text--secondary" v-html="item.text"></div>
                  </div>
                </li>
              </ol>              
            </div>
          </v-widget>          
        </v-flex>
        <v-flex lg5 sm12 xs12>
          <plain-table-order></plain-table-order>
        </v-flex>               
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from '@/api';
import Material from 'vuetify/es5/util/colors';

import VCircle from '@/components/circle/VCircle';
import MiniStatistic from '@/components/widgets/statistic/MiniStatistic';
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder';
import VWidget from '@/components/VWidget';
import CircleStatistic from '@/components/widgets/statistic/CircleStatistic';
import TitleCategory from '@/pages/products/components/TitleCategoryProduct';

export default {
  components: {
    VWidget,
    MiniStatistic,
    CircleStatistic,
    PlainTableOrder,
    VCircle,
    TitleCategory
  },
  data: () => ({
    color: Material,
    selectedTab: 'tab-1',
    linearTrending: [
      {
        subheading: 'Sales',
        headline: '2,55',
        caption: 'increase',
        percent: 15,
        icon: {
          label: 'trending_up',
          color: 'success'
        },
        linear: {
          value: 15,
          color: 'success'
        }
      },
      {
        subheading: 'Revenue',
        headline: '6,553',
        caption: 'increase',
        percent: 10,
        icon: {
          label: 'trending_down',
          color: 'error'
        },
        linear: {
          value: 15,
          color: 'error'
        }
      },
      {
        subheading: 'Orders',
        headline: '5,00',
        caption: 'increase',
        percent: 50,
        icon: {
          label: 'arrow_upward',
          color: 'info'
        },
        linear: {
          value: 50,
          color: 'info'
        }
      }
    ],    
    trending: [
      {
        subheading: 'Email',
        headline: '15+',
        caption: 'email opens',
        percent: 15,
        icon: {
          label: 'email',
          color: 'info'
        },
        linear: {
          value: 15,
          color: 'info'
        }
      },        
      {
        subheading: 'Tasks',
        headline: '90%',
        caption: 'tasks completed.',
        percent: 90,
        icon: {
          label: 'list',
          color: 'primary'
        },
        linear: {
          value: 90,
          color: 'success'
        }
      },        
      {
        subheading: 'Issues',
        headline: '100%',
        caption: 'issues fixed.',
        percent: 100,
        icon: {
          label: 'bug_report',
          color: 'primary'
        },
        linear: {
          value: 100,
          color: 'error'
        }
      },        
    ]    
  }),
  computed: {
    activity () {
      return API.getActivity();
    },
    posts () {
      return API.getPost(3);
    },
    siteTrafficData () {
      return API.getMonthVisit;
    },
    locationData () {
      return API.getLocation;
    }
  },

};
</script>
