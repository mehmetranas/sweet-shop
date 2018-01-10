import {Component, OnInit} from "@angular/core";
import {CategoryService} from "../category.service";
import {Observable} from "rxjs/Observable";
import {SnapshotAction} from "angularfire2/database";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public categories$: Observable<SnapshotAction[]>;
  public activeCategory: string;

  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
  }

}
