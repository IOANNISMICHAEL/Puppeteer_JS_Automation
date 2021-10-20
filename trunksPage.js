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

describe('Login', () => {
    let browser
    let page
    
    before(async function() {
     browser = await puppeteer.launch({
     headless:config.isHeadless,
     slowMo: config.slowMo,
     devtools: config.isDevtools,
     timeout: config.launchTimeout,
      })
    
    page = await browser.newPage()
    //timeout
    await page.setDefaultTimeout(config.waitingTimeout)
    await page.setViewport({
        width: config.viewportWidth,
        height:config.viewportHeight,
     })
    
    })
    
    
   //after(async function(){
    //await browser.close()
     //})
     it('should navigate to homepage', async () => {
         await loadURL(page, config.trunksPage)})

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
        
            it('Trunks Page is visible', async () =>{
                await shouldExist(page, '#app-container > div.app-content > div.app-content-body.ng-scope > div > list-control > div > div > div.bg-light.lter.b-b.wrapper-md > label')
            })
        

    describe('Trunks Page Test', () =>{
       
        it('Add Trunk', async () =>{
            await click(page, '#btnAddTrunk > span')
         //Select Country
            await shouldExist(page, 'body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-header > h4')
            await shouldExist(page,'body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(1) > div > div.ui-select-match.ng-scope > span > span.ui-select-match-text.pull-left')
            await click(page,'body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(1) > div > div.ui-select-match.ng-scope > span > span.ui-select-match-text.pull-left')
            await typeText(page,'US','body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(1) > div > input.form-control.ui-select-search.ng-pristine.ng-untouched.ng-valid.ng-empty')
            await pressKey(page,'Enter')
         //Select Provider
         await shouldExist(page, 'body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(2) > select')
         await click(page,'body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(2) > select')
         //await shouldExist(page,'body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(2) > select')
         page.$x('/html/body/div[1]/div/div/form/div[2]/div[2]/select/option[5]')

        })

        })

    })