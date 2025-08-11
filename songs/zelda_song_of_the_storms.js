// Song of Storms - The Legend of Zelda: Ocarina of Time
// Translated from music sheet to Strudel

setCps(180/60/4)

PIANO: cat(
  note("[d2@2 [f3,a4] [f3,a4]]"),
  note("[e2@2 [g3,b4]@2]"),
  note("[f2@2 [a4,c4] [a4,c4]]"),
  note("[e2@2 [g3,b4]@2]"),
  note("[d2@2 [f3,a4] [f3,a4]]"),
  note("[e2@2 [g3,b4]@2]"),
  note("[f2@2 [a4,c4] [a4,c4]]"),
  note("[e2@2 [g3,b4]@2]"),
  note("[d2@2 [f3,a4]@2]"),
  note("[e2@2 [g3,b4]@2]"),
  note("[f2@2 [a4,c4]@2]"),
  note("[e2@2 [g3,b4]@2]"),
  note("[a#2@2 [d3,f3]@2]"),
  note("[f3@2 [a4,c4]@2]"),
  note("[a#2@2 [d3,f3]@2]"),
  note("[a2@2 [c#3,e3]@2]"),
  note("[d2@2 [f3,a4]@2]"),
  note("[e2@2 [g3,b4]@2]"),
  note("[f2@2 [a4,c4]@2]"),
  note("[e2@2 [g3,b4]@2]"),
  note("[a#2@2 [d3,f3]@2]"),
  note("[f3@2 [a4,c4]@2]"),
  note("[a#2@2 [d3,f3]@2]"),
  note("[a2@2 [c#3,e3]@2]")
).sound("piano")
.lpf(800)
.room(0.2)
.color("red")

ACCORDION: cat(
    note(~!4),
    note(~!4),
    note(~!4),
    note(~!4),
    note(~!4),
    note(~!4),
    note(~!4),
    note(~!4),
    note("[d4 f4] d5@2"),
    note("[d4 f4] d5@2"),
    note("e5@1.5 f5@0.5 [e5 f5]"),
    note("[e5 c5] a4@2"),
    note("a4 d4 [f4 g4]"),
    note("a4@3"),
    note("a4 d4 [f4 g4]"),
    note("e4@3"),
    note("[d4 f4] d5@2"),
    note("[d4 f4] d5@2"),
    note("e5@1.5 f5@0.5 [e5 f5]"),
    note("[e5 c5] a4@2"),
    note("a4 d4 [f4 g4]"),
    note("a4@2 a4"),
    note("d4@6 ~"),
    note("~")
)
.sound("gm_accordion")
.lpf(4000)
.room(0.2)
.color("lightgreen")

DRUMS: cat(
  s("~ rd*2").gain(0.16).pan(0.45).release(0),
  s("rd*4 rd ~!1.5").pan(0.45).gain("[0.08 0.16]*4").release(0)
).bank("RolandTR909").color("yellow").velocity(0.2)