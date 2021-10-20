const puppeteer = require('puppeteer')
const expect = require('chai').expect
const config = require('../lib/config')
const click = require('../lib/helpers').click
const typeText = require('../lib/helpers').typeText
const loadURL = require('../lib/helpers').loadURL
const waitForText = require('../lib/helpers').waitForText
const pressKey = require('../lib/helpers').pressKey
const shouldExist = require('../lib/helpers').shouldExist
const utils = require('../lib/utils')
const shouldNotExist=require('../lib/helpers').shouldNotExist
const awaitForText=require('../lib/helpers').awaitForText
const getCount = require('../lib/helpers').getCount

describe('Extensions Page Test', () => {
    let browser
    let page
    
before(async function() {
     browser = await puppeteer.launch({
     headless:config.isHeadless,
     slowMo: config.slowMo,
     devtools: config.isDevtools,
     timeout: config.launchTimeout,})
     page = await browser.newPage()
     //timeout
     await page.setDefaultTimeout(config.waitingTimeout)
     await page.setViewport({
        width: config.viewportWidth,
        height:config.viewportHeight,})})
after(async function(){
    await browser.close()})
//////////////TESTS BEGIN/////////////////

    describe('Login Test', () =>{  

        it('should navigate to homepage', async () => {
         await loadURL(page, config.loginPage)})

        it('send username', async ()=>{
          await click(page, '#content > div > div > div > form > div.list-group.list-group-sm > div:nth-child(1) > input')
          await typeText(page, 'admin', '#content > div > div > div > form > div > div:nth-child(1) > input')
          }) 
        it('send password', async()=>{
            await click(page, '#content > div > div > div > form > div.list-group.list-group-sm > div:nth-child(2) > input')
            await typeText(page,'Voippa55,.','#content > div > div > div > form > div.list-group.list-group-sm > div:nth-child(2) > input')
        })  
         it('Press on Login', async () => {
            await page.keyboard.press('Enter')
            })
        
            it('Ext Page is visible', async () =>{
                await shouldExist(page, '#app-container > div.app-content > div.app-content-body.ng-scope > div > list-control > div > div > div.bg-light.lter.b-b.wrapper-md > label')
            })

    describe('Extension Page',() =>{
    
        it('Add Extensions', async () => {
            await click(page,'#btnAdd')
            await shouldExist(page,'#app-container > div.app-content > div.app-content-body.ng-scope > div > div.wrapper-md.tab-container > ul > li.ng-scope.active > a')})

        it('Configure Extension', async () =>{
           //add name
            await click(page,'#app-container > div.app-content > div.app-content-body.ng-scope > div > div.wrapper-md.tab-container > div > panel:nth-child(1) > div > div.panel-body > ng-transclude > div > form > text-control:nth-child(2) > div > input')
            await typeText(page,'John','#app-container > div.app-content > div.app-content-body.ng-scope > div > div.wrapper-md.tab-container > div > panel:nth-child(1) > div > div.panel-body > ng-transclude > div > form > text-control:nth-child(2) > div > input')
           //add surname
            await click(page,'#app-container > div.app-content > div.app-content-body.ng-scope > div > div.wrapper-md.tab-container > div > panel:nth-child(1) > div > div.panel-body > ng-transclude > div > form > text-control:nth-child(3) > div > input')
            await typeText(page,'Michael','#app-container > div.app-content > div.app-content-body.ng-scope > div > div.wrapper-md.tab-container > div > panel:nth-child(1) > div > div.panel-body > ng-transclude > div > form > text-control:nth-child(3) > div > input')
           //add email
            await click(page,'#app-container > div.app-content > div.app-content-body.ng-scope > div > div.wrapper-md.tab-container > div > panel:nth-child(1) > div > div.panel-body > ng-transclude > div > form > text-control:nth-child(4) > div > input')
            await typeText(page,'test@test.com','#app-container > div.app-content > div.app-content-body.ng-scope > div > div.wrapper-md.tab-container > div > panel:nth-child(1) > div > div.panel-body > ng-transclude > div > form > text-control:nth-child(4) > div > input') 
           //add phonenumber
            await click(page,'#app-container > div.app-content > div.app-content-body.ng-scope > div > div.wrapper-md.tab-container > div > panel:nth-child(1) > div > div.panel-body > ng-transclude > div > form > text-control:nth-child(5) > div > input')
            await typeText(page,'99123456','#app-container > div.app-content > div.app-content-body.ng-scope > div > div.wrapper-md.tab-container > div > panel:nth-child(1) > div > div.panel-body > ng-transclude > div > form > text-control:nth-child(5) > div > input')
           //save 
           await click(page,'#btnSave') 
           //wait to save
           await shouldExist(page,'#app-container > div.app-content > div.app-content-body.ng-scope > div > list-control > div > div > div.bg-light.lter.b-b.wrapper-md > label')
        }) 
    
        })    
        })

      
})