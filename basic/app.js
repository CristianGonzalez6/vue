Vue.component('CoinDetail', {
  props: ['coin'],

  data () {
    return {
      showPrices: false,
      value: 0,
    }
  },

  computed: {
    title () {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },

    convertedValue () {
      return !this.value ? 0 : this.value / this.coin.price;
    }
  },

  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices;
      this.$emit('change-color', this.showPrices ? 'FF96C8' : '3d3d3d')
    }
  },

  template: `
    <div>
      <img 
        :src="coin.img" 
        :alt="coin.name" 
        @mouseout="toggleShowPrices"
      >
      
      <h1 :class="coin.changePercent > 0 ? 'green' : 'red'">
        {{ title }}
        <span v-show="coin.changePercent > 0">👍🏻</span>
        <span v-show="coin.changePercent < 0">👎🏼</span>
        <span v-show="coin.changePercent === 0">👌🏻</span>
  
        <span @click="toggleShowPrices">{{ showPrices ? '👍🏻' : '👌🏻' }}</span>
      </h1>
      
      <input type="number" v-model="value">
      <span>{{ convertedValue }}</span>
      
      <slot name="text"></slot>
      <slot name="link"></slot>
      
      <ul v-show=showPrices>
      <li 
        :class="{ orange: p.value === coin.price, red: p.value < coin.price, green: p.value >  coin.price }"
        v-for="(p, i) in coin.pricesWithDays" 
        :key="p">
        {{ i }} {{ p.day }} {{ p.value}}
      </li>
    </ul>
    </div>
  `
})

new Vue({
  el: '#app',

  data () {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        price: 9000,
        changePercent: 0,
        pricesWithDays: [
          { day: 'Monday', value: 8400 },
          { day: 'Tuesday', value: 7900 },
          { day: 'Wednesday', value: 8200 },
          { day: 'Thursday', value: 9000 },
          { day: 'Friday', value: 9400 },
          { day: 'Saturday', value: 10000 },
          { day: 'Sunday', value: 10200 },
        ]
      },
      color: 'f4f4f4',
    }
  },

  created () {
    console.log('Created...')
  },

  mounted () {
    console.log('Mounted...')
  },

  methods: {
    updateColor (color) {
        this.color = color || this.color.split('').reverse().join('');
    }
  }
})