"use strict";$(document).ready(function(){$(".toggle").on("click",function(){$(this).next().slideToggle(200),$(this)[0].innerHTML.startsWith("▸")?$(this)[0].innerHTML=$(this)[0].innerHTML.replace("▸","▾"):$(this)[0].innerHTML=$(this)[0].innerHTML.replace("▾","▸")})});