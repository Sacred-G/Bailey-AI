interface ProdiaModelDescription {
  id: string;
  label: string;
  gen: 'sd' | 'sdxl';
  priority?: number;
}

export const HARDCODED_MODELS: { models: ProdiaModelDescription[] } = {
  models: [
    // SDXL models
    { id: 'dreamshaperXL10_alpha2.safetensors [c8afe2ef]', label: 'Dreamshaper XL Alpha 2', gen: 'sdxl' },
    { id: 'dynavisionXL_0411.safetensors [c39cc051]', label: 'Dynavision XL 0411', gen: 'sdxl' },
    { id: 'juggernautXL_v45.safetensors [e75f5471]', label: 'Juggernaut XL V45', gen: 'sdxl' },
    { id: 'realismEngineSDXL_v10.safetensors [af771c3f]', label: 'Realism Engine SDXL V10', gen: 'sdxl' },
    { id: 'sd_xl_base_1.0.safetensors [be9edd61]', label: 'SDXL Base V1.0', gen: 'sdxl', priority: 20 },
    // SD models
    { id: '3Guofeng3_v34.safetensors [50f420de]', label: '3 Guofeng3 V3.4', gen: 'sd' },
    { id: 'absolutereality_V16.safetensors [37db0fc3]', label: 'Absolute Reality V1.6', gen: 'sd' },
    { id: 'absolutereality_v181.safetensors [3d9d4d2b]', label: 'Absolute Reality V1.8.1', gen: 'sd' },
    { id: 'amIReal_V41.safetensors [0a8a2e61]', label: 'Am I Real V4.1', gen: 'sd' },
    { id: 'analog-diffusion-1.0.ckpt [9ca13f02]', label: 'Analog V1', gen: 'sd' },
    { id: 'anythingv3_0-pruned.ckpt [2700c435]', label: 'Anything V3', gen: 'sd' },
    { id: 'anything-v4.5-pruned.ckpt [65745d25]', label: 'Anything V4.5', gen: 'sd' },
    { id: 'anythingV5_PrtRE.safetensors [893e49b9]', label: 'Anything V5', gen: 'sd' },
    { id: 'AOM3A3_orangemixs.safetensors [9600da17]', label: 'AbyssOrangeMix V3', gen: 'sd' },
    { id: 'blazing_drive_v10g.safetensors [ca1c1eab]', label: 'Blazing Drive V10g', gen: 'sd' },
    { id: 'cetusMix_Version35.safetensors [de2f2560]', label: 'CetusMix Version35', gen: 'sd' },
    { id: 'childrensStories_v13D.safetensors [9dfaabcb]', label: 'Children\'s Stories V1 3D', gen: 'sd' },
    { id: 'childrensStories_v1SemiReal.safetensors [a1c56dbb]', label: 'Children\'s Stories V1 SemiReal', gen: 'sd' },
    { id: 'childrensStories_v1ToonAnime.safetensors [2ec7b88b]', label: 'Children\'s Stories V1 Toon-Anime', gen: 'sd' },
    { id: 'Counterfeit_v30.safetensors [9e2a8f19]', label: 'Counterfeit V3.0', gen: 'sd' },
    { id: 'cuteyukimixAdorable_midchapter3.safetensors [04bdffe6]', label: 'CuteYukimix MidChapter3', gen: 'sd' },
    { id: 'cyberrealistic_v33.safetensors [82b0d085]', label: 'CyberRealistic V3.3', gen: 'sd' },
    { id: 'dalcefo_v4.safetensors [425952fe]', label: 'Dalcefo V4', gen: 'sd' },
    { id: 'deliberate_v2.safetensors [10ec4b29]', label: 'Deliberate V2', gen: 'sd', priority: 5 },
    { id: 'deliberate_v3.safetensors [afd9d2d4]', label: 'Deliberate V3', gen: 'sd' },
    { id: 'dreamlike-anime-1.0.safetensors [4520e090]', label: 'Dreamlike Anime V1', gen: 'sd' },
    { id: 'dreamlike-diffusion-1.0.safetensors [5c9fd6e0]', label: 'Dreamlike Diffusion V1', gen: 'sd' },
    { id: 'dreamlike-photoreal-2.0.safetensors [fdcf65e7]', label: 'Dreamlike Photoreal V2', gen: 'sd' },
    { id: 'dreamshaper_6BakedVae.safetensors [114c8abb]', label: 'Dreamshaper 6 baked vae', gen: 'sd' },
    { id: 'dreamshaper_7.safetensors [5cf5ae06]', label: 'Dreamshaper 7', gen: 'sd' },
    { id: 'dreamshaper_8.safetensors [9d40847d]', label: 'Dreamshaper 8', gen: 'sd' },
    { id: 'edgeOfRealism_eorV20.safetensors [3ed5de15]', label: 'Edge of Realism EOR V2.0', gen: 'sd' },
    { id: 'EimisAnimeDiffusion_V1.ckpt [4f828a15]', label: 'Eimis Anime Diffusion V1.0', gen: 'sd' },
    { id: 'elldreths-vivid-mix.safetensors [342d9d26]', label: 'Elldreth\'s Vivid', gen: 'sd' },
    { id: 'epicrealism_naturalSinRC1VAE.safetensors [90a4c676]', label: 'EpiCRealism Natural Sin RC1', gen: 'sd' },
    { id: 'ICantBelieveItsNotPhotography_seco.safetensors [4e7a3dfd]', label: 'I Cant Believe Its Not Photography Seco', gen: 'sd' },
    { id: 'juggernaut_aftermath.safetensors [5e20c455]', label: 'Juggernaut Aftermath', gen: 'sd' },
    { id: 'lofi_v4.safetensors [ccc204d6]', label: 'Lofi V4', gen: 'sd' },
    { id: 'lyriel_v16.safetensors [68fceea2]', label: 'Lyriel V1.6', gen: 'sd' },
    { id: 'majicmixRealistic_v4.safetensors [29d0de58]', label: 'MajicMix Realistic V4', gen: 'sd' },
    { id: 'mechamix_v10.safetensors [ee685731]', label: 'MechaMix V1.0', gen: 'sd' },
    { id: 'meinamix_meinaV9.safetensors [2ec66ab0]', label: 'MeinaMix Meina V9', gen: 'sd' },
    { id: 'meinamix_meinaV11.safetensors [b56ce717]', label: 'MeinaMix Meina V11', gen: 'sd' },
    { id: 'neverendingDream_v122.safetensors [f964ceeb]', label: 'Neverending Dream V1.22', gen: 'sd' },
    { id: 'openjourney_V4.ckpt [ca2f377f]', label: 'Openjourney V4', gen: 'sd' },
    { id: 'pastelMixStylizedAnime_pruned_fp16.safetensors [793a26e8]', label: 'Pastel-Mix', gen: 'sd' },
    { id: 'portraitplus_V1.0.safetensors [1400e684]', label: 'Portrait+ V1', gen: 'sd' },
    { id: 'protogenx34.safetensors [5896f8d5]', label: 'Protogen x3.4', gen: 'sd' },
    { id: 'Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]', label: 'Realistic Vision V1.4', gen: 'sd' },
    { id: 'Realistic_Vision_V2.0.safetensors [79587710]', label: 'Realistic Vision V2.0', gen: 'sd' },
    { id: 'Realistic_Vision_V4.0.safetensors [29a7afaa]', label: 'Realistic Vision V4.0', gen: 'sd' },
    { id: 'Realistic_Vision_V5.0.safetensors [614d1063]', label: 'Realistic Vision V5.0', gen: 'sd', priority: 15 },
    { id: 'redshift_diffusion-V10.safetensors [1400e684]', label: 'Redshift Diffusion V1.0', gen: 'sd' },
    { id: 'revAnimated_v122.safetensors [3f4fefd9]', label: 'ReV Animated V1.2.2', gen: 'sd' },
    { id: 'rundiffusionFX25D_v10.safetensors [cd12b0ee]', label: 'RunDiffusion FX 2.5D V1.0', gen: 'sd' },
    { id: 'rundiffusionFX_v10.safetensors [cd4e694d]', label: 'RunDiffusion FX Photorealistic V1.0', gen: 'sd' },
    { id: 'sdv1_4.ckpt [7460a6fa]', label: 'SD V1.4', gen: 'sd' },
    { id: 'v1-5-pruned-emaonly.safetensors [d7049739]', label: 'SD V1.5', gen: 'sd', priority: 9 },
    { id: 'shoninsBeautiful_v10.safetensors [25d8c546]', label: 'Shonin\'s Beautiful People V1.0', gen: 'sd' },
    { id: 'theallys-mix-ii-churned.safetensors [5d9225a4]', label: 'TheAlly\'s Mix II', gen: 'sd' },
    { id: 'timeless-1.0.ckpt [7c4971d4]', label: 'Timeless V1', gen: 'sd' },
    { id: 'toonyou_beta6.safetensors [980f6b15]', label: 'ToonYou Beta 6', gen: 'sd' },
  ],
};
