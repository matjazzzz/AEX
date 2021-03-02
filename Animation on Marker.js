// https://www.youtube.com/watch?v=b9AVrj8UFvs

n = marker.nearestKey(time).index;
if (time < marker.key(n).time){
  n = n-1;
}
if(n==0){
  n = 1
}
t = time - marker.key(n).time;
thisProperty.valueAtTime(t)
