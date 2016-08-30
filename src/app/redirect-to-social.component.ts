import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { SafeHtml } from '@angular/platform-browser'

declare var twemoji: { parse: (str: string) => string }
@Component({
  selector: 'vodka',
  template: require('./redirect-to-social.component.html'),
  directives: [],
  styles: [
`:host {
  display: block;
}`,
`
.notice{
  max-width: 20em;
  padding: 1em 2em;
  margin: 0 auto;
}`
  ]
})
export class RedirectToSocialComponent implements OnInit {
  DURATION = 5000

  message: SafeHtml = twemoji.parse("We have a new 🏠!")
  domain = "rush.mostate.social"
  redirectTo: string
  time = 0
  private intervalId: NodeJS.Timer

  constructor (private changeRef: ChangeDetectorRef) {
    // Carry FullStory id over to next domain
    let fullStoryId = localStorage.getItem('fs_id')
    this.redirectTo = 'http://' + this.domain
    if (fullStoryId) {
      this.redirectTo += `?vodka=${fullStoryId}`
    }

    // Set that they have seen this screen before
    localStorage.setItem('social_immediate_redirect', 'true')
  }

  ngOnInit () {
    const interval = 10
    this.time = 0
    this.intervalId = setInterval(() => {
      this.time += interval
      this.changeRef.detectChanges()
      if (this.time > this.DURATION) {
        clearInterval(this.intervalId)
        location.href = this.redirectTo
      }
    }, interval)
  }
}
