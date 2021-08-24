import { Component, OnInit, NgZone } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HitList } from "src/app/classes/hitList";
import { Story } from "src/app/classes/Story";
import { SearchEngineService } from "src/app/services/search-engine.service";


@Component({
  selector: "app-lines",
  templateUrl: "./lines.page.html",
  styleUrls: ["./lines.page.scss"],
})
export class LinesPage implements OnInit {
  public story: Story;
  storyID: string;
  storyChannel: string;
  storyProgramme: string;
  storyTime: number;
  public hitList: HitList;

  constructor(
    public searchEngineService: SearchEngineService,
    private activatedRoute: ActivatedRoute,
    private ngzone: NgZone,
  ) {

    this.story = {
      ID: this.activatedRoute.snapshot.paramMap.get("id"),
      Channel: this.activatedRoute.snapshot.paramMap.get("channel"),
      Country: "",
      Programme: "",
      StopTime: 0,
      Text: "",
      Time: parseInt(this.activatedRoute.snapshot.paramMap.get("time")),
      datetime: "string"
    };

    this.hitList = {
      status: "OK",
      Stories: [],
    };
  }

  ngOnInit() {
    this.storyID = this.activatedRoute.snapshot.paramMap.get("id");
    this.storyChannel = this.activatedRoute.snapshot.paramMap.get("channel");
    this.storyTime = parseInt(this.activatedRoute.snapshot.paramMap.get("time"));
    this.getStory();
  }

  getStory() {
    this.ngzone.run(() => {
      this.searchEngineService.getStoryLines(this.storyChannel, this.storyTime, 0, 50).subscribe(
        (lines) => {
          this.story = lines.Stories;
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
