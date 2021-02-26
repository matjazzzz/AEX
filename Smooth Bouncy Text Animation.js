// https://www.youtube.com/watch?v=WaKQkAZAMe4

delay = .1;
myDelay = delay*textIndex;
t = (time - inPoint) - myDelay;
if (t >= 0) {
  freq =3;
  amplitude = 40;
  decay = 12.0;
  s = amplitude*Math.cos(freq*t*2*Math.PI)/Math.exp(decay*t);
  [s,s]
}
else {
  value
}
