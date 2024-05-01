export const defaultGraph = {
  "last_node_id": 22,
  "last_link_id": 15,
  "nodes": [
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        1430,
        130
      ],
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 1
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 2
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 3
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 4
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            7
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        738383085009107,
        "randomize",
        35,
        7,
        "dpmpp_2m",
        "karras",
        1
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        930,
        460
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 6
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            3
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "(blurry:1.3), ugly, jpeg compression, jpeg artifacts, (watermark, logo, fineprint:1.3)"
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": [
        100,
        130
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            4
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        1024,
        1024,
        1
      ]
    },
    {
      "id": 20,
      "type": "LoraLoader",
      "pos": [
        515,
        130
      ],
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 9
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 10
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            1
          ],
          "shape": 3
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            5,
            6
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "zhuoyueaiXL_lora_upscale-000008.safetensors",
        1,
        1
      ]
    },
    {
      "id": 16,
      "type": "CheckpointLoaderSimple",
      "pos": [
        100,
        366
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            9
          ],
          "shape": 3
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            10
          ],
          "shape": 3
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            8
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "sd_xl_base_1.0.safetensors"
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1824,
        140
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 7
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 8
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            15
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 21,
      "type": "SaveImage",
      "pos": [
        2062,
        112
      ],
      "size": [
        659.9230834960936,
        642.9139572143553
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 15
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        930,
        130
      ],
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 5
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            2
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "a close up of zhuoyue, wearing sunglasses, a hyperrealistic painting inspired by lee jeffries, zbrush central contest winner, hyperrealism, steven mccurry portrait, photography alexey gurylev, alessio albi"
      ]
    }
  ],
  "links": [
    [
      1,
      20,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      2,
      6,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      3,
      7,
      0,
      3,
      2,
      "CONDITIONING"
    ],
    [
      4,
      5,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      5,
      20,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      6,
      20,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      7,
      3,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      8,
      16,
      2,
      8,
      1,
      "VAE"
    ],
    [
      9,
      16,
      0,
      20,
      0,
      "MODEL"
    ],
    [
      10,
      16,
      1,
      20,
      1,
      "CLIP"
    ],
    [
      15,
      8,
      0,
      21,
      0,
      "IMAGE"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {},
  "version": 0.4
};
