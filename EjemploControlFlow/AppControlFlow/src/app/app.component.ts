import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowIfComponent } from "./components/control-flow-if/control-flow-if.component";
import { ControlFlowForComponent } from "./components/control-flow-for/control-flow-for.component";
import { ControlFlowSwitchComponent } from "./components/control-flow-switch/control-flow-switch.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControlFlowIfComponent, ControlFlowForComponent, ControlFlowSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppControlFlow';
}
