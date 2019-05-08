var gitgraph = new GitGraph({
  template: "metro",//"metro",blackarrow
  orientation: "vertical",
  author: "Sky.Gu",
  mode: "extended" // or compact if you don't want the messages
});
var master = gitgraph.branch({name:"master",color:""});
gitgraph.commit("Gitlab Flow");
master.commit({message: "Init v1.0" ,tag: "v1.0",});

var develop = master.branch("dev"); 
develop.commit({message:"Merge request-A from local dev branch",author:"developer A"});
develop.commit({message:"Merge request-B from local dev branch",author:"developer B"});
develop.commit({message:"Merge request-C from local dev branch",author:"developer C"});

var pre_rel = develop.branch("rel/1.0_pre"); 
pre_rel.commit({message:"autorun testing success",tag:"v1.0_0515_12:00"});


develop.commit({message:"Merge request-D from local dev branch",author:"developer D"});
develop.commit({message:"Merge request-E from local dev branch",author:"developer E"});

develop.merge(pre_rel,{message:"autorun testing failure",color:"red"});

develop.commit({message:"Merge request-F from local dev branch",author:"developer F"});

develop.merge(pre_rel,{message:"autorun testing success",tag:"v1.0_0515_16:00"});


var rel = pre_rel.branch({name:"rel/1.0",color:"green"});
rel.commit({message:"released",tag:"v1.0_0515",color:"green"});

var hotfix = rel.branch({name:"hotfix",color:"orange"});
hotfix.commit({message:"hotfixed",tag:"fix_v1.0_0517",color:"orange"});
hotfix.merge(develop);

develop.commit({message:"Merge request-G from local dev branch",author:"developer G"});
develop.merge(pre_rel,{message:"autorun testing success",tag:"v1.0_0517_13:00"});

pre_rel.merge(rel,{message:"released",tag:"v1.0_0517",color:"green"});

develop.merge(master,{message:"Init v2.0" ,tag: "v2.0",});


