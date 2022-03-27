let app = Vue.createApp({
  data: () => {
    return {
      menus: [ 
        {name: "Home", icon: "/"},
        {name: "Home", icon: "/"},
        {name: "Home", icon: "/"},
        {name: "Home", icon: "/"},
        {name: "Home", icon: "/"},
      ],
      cardItems: [
        { titleText:'ROI Income', numText:'4280.884 TRX', headIconPath: '/assets/img/roi_income.svg', mainIconPath: '/assets/img/roi_income-1.svg' }
      ]
    }
  }
})
app.mount('#app')
