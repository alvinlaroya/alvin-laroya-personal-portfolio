import { ref, provide, withAsyncContext, computed, reactive, mergeProps, withCtx, createVNode, createTextVNode, unref, useSlots, renderSlot, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, defineComponent, toRef, toHandlers, inject, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive, useForwardPropsEmits, DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, VisuallyHidden, DialogTitle, DialogDescription, DialogClose } from 'reka-ui';
import { e as _sfc_main$8, a as __nuxt_component_0$2, f as useLocale, b as useAppConfig, t as tv, m as _sfc_main$9, p as pickLinkProps, n as _sfc_main$a, i as _sfc_main$e, j as _sfc_main$b, o as get, _ as _export_sfc, c as usePortal, r as useToast, d as __nuxt_component_1$1, q as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$7 } from './Input-DfKQDC2l.mjs';
import { reactivePick } from '@vueuse/core';
import { _ as _sfc_main$2$1, a as _sfc_main$1$2, b as _sfc_main$c } from './Textarea-DHtM5nCC.mjs';
import * as z from 'zod';
import { u as useFetch } from './fetch-B8NarSM6.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'pinia';
import 'vue-router';
import '@supabase/ssr';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@vue/shared';

const theme$2 = {
  "slots": {
    "root": "relative min-w-0",
    "list": "flex items-center gap-1.5",
    "item": "flex min-w-0",
    "link": "group relative flex items-center gap-1.5 text-sm min-w-0 focus-visible:outline-primary",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkLabel": "truncate",
    "separator": "flex",
    "separatorIcon": "shrink-0 size-5 text-muted"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-primary font-semibold"
      },
      "false": {
        "link": "text-muted font-medium"
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "to": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "disabled": false,
      "active": false,
      "to": true,
      "class": {
        "link": [
          "hover:text-default",
          "transition-colors"
        ]
      }
    }
  ]
};
const _sfc_main$6 = {
  __name: "UBreadcrumb",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "nav" },
    items: { type: Array, required: false },
    separatorIcon: { type: String, required: false },
    labelKey: { type: String, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const separatorIcon = computed(() => props.separatorIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.breadcrumb || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "aria-label": "breadcrumb",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ol class="${ssrRenderClass(ui.value.list({ class: props.ui?.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<!--[--><li class="${ssrRenderClass(ui.value.item({ class: [props.ui?.item, item.ui?.item] }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$a, mergeProps({ ref_for: true }, slotProps, {
                      as: "span",
                      "aria-current": active && index === __props.items.length - 1 ? "page" : void 0,
                      class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                    }), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index
                          }, () => {
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                              item,
                              active: index === __props.items.length - 1,
                              index
                            }, () => {
                              if (item.icon) {
                                _push4(ssrRenderComponent(_sfc_main$e, {
                                  name: item.icon,
                                  class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: index === __props.items.length - 1 })
                                }, null, _parent4, _scopeId3));
                              } else if (item.avatar) {
                                _push4(ssrRenderComponent(_sfc_main$b, mergeProps({
                                  size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: index === __props.items.length - 1 })
                                }), null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            if (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) {
                              _push4(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                item,
                                active: index === __props.items.length - 1,
                                index
                              }, () => {
                                _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                              item,
                              active: index === __props.items.length - 1,
                              index
                            }, null, _push4, _parent4, _scopeId3);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, item.slot || "item", {
                              item,
                              index
                            }, () => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                item,
                                active: index === __props.items.length - 1,
                                index
                              }, () => [
                                item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: index === __props.items.length - 1 })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                  key: 1,
                                  size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: index === __props.items.length - 1 })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ]),
                              unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                  item,
                                  active: index === __props.items.length - 1,
                                  index
                                }, () => [
                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                item,
                                active: index === __props.items.length - 1,
                                index
                              })
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$a, mergeProps({ ref_for: true }, slotProps, {
                        as: "span",
                        "aria-current": active && index === __props.items.length - 1 ? "page" : void 0,
                        class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index
                          }, () => [
                            renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                              item,
                              active: index === __props.items.length - 1,
                              index
                            }, () => [
                              item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                key: 0,
                                name: item.icon,
                                class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: index === __props.items.length - 1 })
                              }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                key: 1,
                                size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                              }, { ref_for: true }, item.avatar, {
                                class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: index === __props.items.length - 1 })
                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                            ]),
                            unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] })
                            }, [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                item,
                                active: index === __props.items.length - 1,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                              item,
                              active: index === __props.items.length - 1,
                              index
                            })
                          ])
                        ]),
                        _: 2
                      }, 1040, ["aria-current", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
              if (index < __props.items.length - 1) {
                _push2(`<li role="presentation" aria-hidden="true" class="${ssrRenderClass(ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "separator", {}, () => {
                  _push2(ssrRenderComponent(_sfc_main$e, {
                    name: separatorIcon.value,
                    class: ui.value.separatorIcon({ class: [props.ui?.separatorIcon, item.ui?.separatorIcon] })
                  }, null, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></ol>`);
          } else {
            return [
              createVNode("ol", {
                class: ui.value.list({ class: props.ui?.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                  return openBlock(), createBlock(Fragment, { key: index }, [
                    createVNode("li", {
                      class: ui.value.item({ class: [props.ui?.item, item.ui?.item] })
                    }, [
                      createVNode(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                        default: withCtx(({ active, ...slotProps }) => [
                          createVNode(_sfc_main$a, mergeProps({ ref_for: true }, slotProps, {
                            as: "span",
                            "aria-current": active && index === __props.items.length - 1 ? "page" : void 0,
                            class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot || "item", {
                                item,
                                index
                              }, () => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                  item,
                                  active: index === __props.items.length - 1,
                                  index
                                }, () => [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                    key: 0,
                                    name: item.icon,
                                    class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: index === __props.items.length - 1 })
                                  }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                    key: 1,
                                    size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                  }, { ref_for: true }, item.avatar, {
                                    class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: index === __props.items.length - 1 })
                                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                ]),
                                unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                    item,
                                    active: index === __props.items.length - 1,
                                    index
                                  }, () => [
                                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                  ])
                                ], 2)) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                  item,
                                  active: index === __props.items.length - 1,
                                  index
                                })
                              ])
                            ]),
                            _: 2
                          }, 1040, ["aria-current", "class"])
                        ]),
                        _: 2
                      }, 1040)
                    ], 2),
                    index < __props.items.length - 1 ? (openBlock(), createBlock("li", {
                      key: 0,
                      role: "presentation",
                      "aria-hidden": "true",
                      class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] })
                    }, [
                      renderSlot(_ctx.$slots, "separator", {}, () => [
                        createVNode(_sfc_main$e, {
                          name: separatorIcon.value,
                          class: ui.value.separatorIcon({ class: [props.ui?.separatorIcon, item.ui?.separatorIcon] })
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const useSupabaseClient = () => {
  return useNuxtApp().$supabase.client;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ReviewCard",
  __ssrInlineRender: true,
  props: {
    id: { default: 0 },
    reviewed_by: { default: "Alvin Laroya" },
    message: { default: "Sample revew" },
    likes: { default: 0 }
  },
  emits: ["delete", "like"],
  setup(__props, { emit: __emit }) {
    const admin = inject("admin");
    const localLikes = ref(__props.likes);
    const supabase = useSupabaseClient();
    const emit = __emit;
    const isDeleting = ref(false);
    const toast = useToast();
    const deleteReview = async () => {
      isDeleting.value = true;
      try {
        const { error } = await supabase.from("reviews").delete().eq("id", __props.id);
        if (error) {
          return toast.add({
            title: "Error",
            description: error,
            color: "error"
          });
        }
        isDeleting.value = false;
        emit("delete");
        toast.add({
          title: "Success",
          description: "Review deleted successfully",
          color: "primary"
        });
      } catch (error) {
        if (error) {
          toast.add({
            title: "Error",
            description: error,
            color: "error"
          });
        }
      }
    };
    const isLiking = ref(false);
    const incrementLikeHandler = async () => {
      isLiking.value = true;
      const { data, error } = await supabase.rpc("increment_likes", { row_id: __props.id });
      if (!error) {
        localLikes.value = data?.likes;
        isLiking.value = false;
        toast.add({
          title: "Liked",
          description: `You upvoted ${__props.reviewed_by}'s review`,
          color: "primary",
          icon: "i-lucide-arrow-big-up"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_USeparator = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-lg shadow-md hover:shadow-lg transition-shadow relative justify-between flex flex-col" }, _attrs))}><div class="my-3"><p class="text-white text-sm font-light leading-relaxed mb-3"> &quot;${ssrInterpolate(_ctx.message)}&quot; </p><div class="flex items-center gap-4"><div class="flex justify-between w-full items-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: incrementLikeHandler,
        loading: unref(isLiking),
        disabled: unref(isLiking),
        icon: "i-lucide-arrow-big-up",
        size: "sm",
        color: unref(localLikes) > 0 ? "primary" : "neutral",
        variant: "ghost",
        class: "cursor-pointer group",
        ui: { leadingIcon: "group-hover:animate-pulse group-hover:scale-125 duration-300" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(localLikes))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(localLikes)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center space-x-4"><h4 class="font-normal text-xs text-gray-400"> - ${ssrInterpolate(_ctx.reviewed_by)}</h4>`);
      if (unref(admin)) {
        _push(ssrRenderComponent(_component_UButton, {
          onClick: deleteReview,
          loading: unref(isDeleting),
          disabled: unref(isDeleting),
          icon: "i-lucide-trash",
          size: "sm",
          color: "error",
          variant: "solid",
          class: "text-white cursor-pointer"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_USeparator, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReviewCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$5, { __name: "ReviewCard" });
const theme$1 = {
  "base": "animate-pulse rounded-md bg-elevated"
};
const _sfc_main$4 = {
  __name: "USkeleton",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.skeleton || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "aria-busy": "true",
        "aria-label": "loading",
        "aria-live": "polite",
        role: "alert",
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_USkeleton = _sfc_main$4;
  const _component_USeparator = _sfc_main$1$1;
  _push(`<!--[-->`);
  ssrRenderList(Array(3), (i) => {
    _push(`<div class="flex flex-col space-y-2 w-full my-2">`);
    _push(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-full" }, null, _parent));
    _push(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-1/2" }, null, _parent));
    _push(`<div class="flex justify-between">`);
    _push(ssrRenderComponent(_component_USkeleton, { class: "h-7 w-7 rounded-full" }, null, _parent));
    _push(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-24" }, null, _parent));
    _push(`</div>`);
    _push(ssrRenderComponent(_component_USeparator, null, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReviewCardSkeleton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]), { __name: "ReviewCardSkeleton" });
const theme = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default divide-y divide-default flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
        "content": "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"
      }
    },
    "fullscreen": {
      "true": {
        "content": "inset-0"
      },
      "false": {
        "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-lg shadow-lg ring ring-default overflow-hidden"
      }
    }
  }
};
const _sfc_main$2 = {
  __name: "UModal",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    transition: { type: Boolean, required: false, default: true },
    fullscreen: { type: Boolean, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: String, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["after:leave", "after:enter", "close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      const defaultEvents = {
        closeAutoFocus: (e) => e.preventDefault()
      };
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, defaultEvents);
      }
      return defaultEvents;
    });
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.modal || {} })({
      transition: props.transition,
      fullscreen: props.fullscreen
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
                              _push4(`<div class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId3}>`);
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push4, _parent4, _scopeId3);
                              if (props.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", {
                                        close,
                                        ui: ui.value
                                      }, () => {
                                        if (props.close) {
                                          _push5(ssrRenderComponent(_sfc_main$8, mergeProps({
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", {
                                          close,
                                          ui: ui.value
                                        }, () => [
                                          props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", { close }, () => [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: props.ui?.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => [
                                createVNode("div", {
                                  class: ui.value.wrapper({ class: props.ui?.wrapper })
                                }, [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                    key: 0,
                                    class: ui.value.title({ class: props.ui?.title })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                    key: 1,
                                    class: ui.value.description({ class: props.ui?.description })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true)
                                ], 2),
                                renderSlot(_ctx.$slots, "actions"),
                                props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                  key: 0,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "close", {
                                      close,
                                      ui: ui.value
                                    }, () => [
                                      props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                        key: 0,
                                        icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                        color: "neutral",
                                        variant: "ghost",
                                        "aria-label": unref(t)("modal.close")
                                      }, typeof props.close === "object" ? props.close : {}, {
                                        class: ui.value.close({ class: props.ui?.close })
                                      }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: props.ui?.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: props.ui?.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => [
                          !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ui.value.header({ class: props.ui?.header })
                          }, [
                            renderSlot(_ctx.$slots, "header", { close }, () => [
                              createVNode("div", {
                                class: ui.value.wrapper({ class: props.ui?.wrapper })
                              }, [
                                __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                  key: 0,
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "title", {}, () => [
                                      createTextVNode(toDisplayString(__props.title), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true),
                                __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                  key: 1,
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "description", {}, () => [
                                      createTextVNode(toDisplayString(__props.description), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true)
                              ], 2),
                              renderSlot(_ctx.$slots, "actions"),
                              props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                key: 0,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "close", {
                                    close,
                                    ui: ui.value
                                  }, () => [
                                    props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                      key: 0,
                                      icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                      color: "neutral",
                                      variant: "ghost",
                                      "aria-label": unref(t)("modal.close")
                                    }, typeof props.close === "object" ? props.close : {}, {
                                      class: ui.value.close({ class: props.ui?.close })
                                    }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          !!slots.body ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: ui.value.body({ class: props.ui?.body })
                          }, [
                            renderSlot(_ctx.$slots, "body", { close })
                          ], 2)) : createCommentVNode("", true),
                          !!slots.footer ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: ui.value.footer({ class: props.ui?.footer })
                          }, [
                            renderSlot(_ctx.$slots, "footer", { close })
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1040, ["class", "onAfterEnter", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), unref(portalProps), {
                default: withCtx(() => [
                  __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                    key: 0,
                    class: ui.value.overlay({ class: props.ui?.overlay })
                  }, null, 8, ["class"])) : createCommentVNode("", true),
                  createVNode(unref(DialogContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                        default: withCtx(() => [
                          __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", { close }, () => [
                        !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ui.value.header({ class: props.ui?.header })
                        }, [
                          renderSlot(_ctx.$slots, "header", { close }, () => [
                            createVNode("div", {
                              class: ui.value.wrapper({ class: props.ui?.wrapper })
                            }, [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                key: 0,
                                class: ui.value.title({ class: props.ui?.title })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                key: 1,
                                class: ui.value.description({ class: props.ui?.description })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true)
                            ], 2),
                            renderSlot(_ctx.$slots, "actions"),
                            props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                              key: 0,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "close", {
                                  close,
                                  ui: ui.value
                                }, () => [
                                  props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                    key: 0,
                                    icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                    color: "neutral",
                                    variant: "ghost",
                                    "aria-label": unref(t)("modal.close")
                                  }, typeof props.close === "object" ? props.close : {}, {
                                    class: ui.value.close({ class: props.ui?.close })
                                  }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        !!slots.body ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: ui.value.body({ class: props.ui?.body })
                        }, [
                          renderSlot(_ctx.$slots, "body", { close })
                        ], 2)) : createCommentVNode("", true),
                        !!slots.footer ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: ui.value.footer({ class: props.ui?.footer })
                        }, [
                          renderSlot(_ctx.$slots, "footer", { close })
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1040, ["class", "onAfterEnter", "onAfterLeave"])
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReviewForm",
  __ssrInlineRender: true,
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const schema = z.object({
      name: z.string("Name is required!"),
      message: z.string("Message is required!")
    });
    const state = reactive({
      name: void 0,
      message: void 0
    });
    const open = inject("open");
    const toast = useToast();
    const isSubmitting = ref(false);
    const form = ref();
    const handleSubmit = async () => {
      await form.value.submit();
    };
    const supabase = useSupabaseClient();
    const emit = __emit;
    async function onSubmit(event) {
      event.preventDefault();
      isSubmitting.value = true;
      try {
        const { data, error } = await supabase.from("reviews").insert({
          "reviewed_by": state.name,
          "message": state.message
        }).select();
        if (error) {
          return toast.add({
            title: "Error",
            description: error,
            color: "error"
          });
        }
        toast.add({
          title: "Success",
          description: "Your review has been submitted successfully!",
          color: "primary"
        });
        emit("submit", data);
        state.name = void 0;
        state.message = void 0;
      } catch (error) {
        console.error("Error submitting review:", error);
        toast.add({
          title: "Error",
          description: "Failed to submit your review. Please try again.",
          color: "error"
        });
      } finally {
        isSubmitting.value = false;
      }
    }
    const cancelHandler = () => {
      open.value = false;
      state.name = void 0;
      state.message = void 0;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$2;
      const _component_UForm = _sfc_main$2$1;
      const _component_UFormField = _sfc_main$1$2;
      const _component_UInput = _sfc_main$7;
      const _component_UTextarea = _sfc_main$c;
      const _component_Icon = __nuxt_component_1$1;
      const _component_UButton = _sfc_main$8;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        title: "Write a review",
        open: unref(open),
        ui: { footer: "justify-end" }
      }, _attrs), {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UForm, {
              ref_key: "form",
              ref: form,
              schema: unref(schema),
              state: unref(state),
              class: "space-y-4",
              onSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "Name",
                    name: "name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).name,
                          "onUpdate:modelValue": ($event) => unref(state).name = $event,
                          size: "xl",
                          class: "w-full",
                          disabled: unref(isSubmitting)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).name,
                            "onUpdate:modelValue": ($event) => unref(state).name = $event,
                            size: "xl",
                            class: "w-full",
                            disabled: unref(isSubmitting)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: "Message",
                    name: "message"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UTextarea, {
                          modelValue: unref(state).message,
                          "onUpdate:modelValue": ($event) => unref(state).message = $event,
                          size: "xl",
                          placeholder: "Type your message here...",
                          class: "w-full",
                          disabled: unref(isSubmitting)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UTextarea, {
                            modelValue: unref(state).message,
                            "onUpdate:modelValue": ($event) => unref(state).message = $event,
                            size: "xl",
                            placeholder: "Type your message here...",
                            class: "w-full",
                            disabled: unref(isSubmitting)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UFormField, {
                      label: "Name",
                      name: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).name,
                          "onUpdate:modelValue": ($event) => unref(state).name = $event,
                          size: "xl",
                          class: "w-full",
                          disabled: unref(isSubmitting)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "Message",
                      name: "message"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UTextarea, {
                          modelValue: unref(state).message,
                          "onUpdate:modelValue": ($event) => unref(state).message = $event,
                          size: "xl",
                          placeholder: "Type your message here...",
                          class: "w-full",
                          disabled: unref(isSubmitting)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(state)?.name?.length > 0 && unref(state)?.message?.length > 0) {
              _push2(`<blockquote class="border-l-4 border-gray-500 italic mt-5 pl-4 md:pl-8 py-4 mx-3"${_scopeId}><p class="text-[16px] font-normal text-white"${_scopeId}>${ssrInterpolate(unref(state).message)}</p><div class="flex justify-between"${_scopeId}><div class="flex space-x-2 text-gray-400 text-xs items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-big-up",
                size: "1.2rem"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>2 upvotes</span></div><cite class="block text-right mt-4 text-gray-600"${_scopeId}>- ${ssrInterpolate(unref(state).name)}</cite></div></blockquote>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full" }, [
                createVNode(_component_UForm, {
                  ref_key: "form",
                  ref: form,
                  schema: unref(schema),
                  state: unref(state),
                  class: "space-y-4",
                  onSubmit
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UFormField, {
                      label: "Name",
                      name: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).name,
                          "onUpdate:modelValue": ($event) => unref(state).name = $event,
                          size: "xl",
                          class: "w-full",
                          disabled: unref(isSubmitting)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "Message",
                      name: "message"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UTextarea, {
                          modelValue: unref(state).message,
                          "onUpdate:modelValue": ($event) => unref(state).message = $event,
                          size: "xl",
                          placeholder: "Type your message here...",
                          class: "w-full",
                          disabled: unref(isSubmitting)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["schema", "state"]),
                unref(state)?.name?.length > 0 && unref(state)?.message?.length > 0 ? (openBlock(), createBlock("blockquote", {
                  key: 0,
                  class: "border-l-4 border-gray-500 italic mt-5 pl-4 md:pl-8 py-4 mx-3"
                }, [
                  createVNode("p", { class: "text-[16px] font-normal text-white" }, toDisplayString(unref(state).message), 1),
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("div", { class: "flex space-x-2 text-gray-400 text-xs items-center" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-big-up",
                        size: "1.2rem"
                      }),
                      createVNode("span", null, "2 upvotes")
                    ]),
                    createVNode("cite", { class: "block text-right mt-4 text-gray-600" }, "- " + toDisplayString(unref(state).name), 1)
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Cancel",
              color: "neutral",
              variant: "outline",
              onClick: cancelHandler
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              onClick: handleSubmit,
              class: "flex items-center justify-center cursor-pointer",
              size: "sm",
              loading: unref(isSubmitting),
              disabled: unref(isSubmitting)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(isSubmitting) ? "Sending..." : "Submit Review")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(isSubmitting) ? "Sending..." : "Submit Review"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                label: "Cancel",
                color: "neutral",
                variant: "outline",
                onClick: cancelHandler
              }),
              createVNode(_component_UButton, {
                onClick: handleSubmit,
                class: "flex items-center justify-center cursor-pointer",
                size: "sm",
                loading: unref(isSubmitting),
                disabled: unref(isSubmitting)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(isSubmitting) ? "Sending..." : "Submit Review"), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReviewForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ReviewForm = Object.assign(_sfc_main$1, { __name: "ReviewForm" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const openModal = ref(false);
    const openReviewModal = () => openModal.value = !openModal.value;
    provide("open", openModal);
    const from = ref(0);
    const to = ref(6);
    const { data, status, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/reviews", {
      query: computed(() => ({
        from: from.value,
        to: to.value
      }))
    }, "$sxcqZId8DD")), __temp = await __temp, __restore(), __temp);
    const localReviews = reactive([]);
    const reviews = computed(() => [...localReviews, ...data.value.reviews.data]);
    const count = computed(() => data.value.reviews.count);
    ref(["New to Old", "Old to New", "Top Voted"]);
    ref("New to Old");
    const submitReviewHandler = (data2) => {
      localReviews.push(data2[0]);
      openModal.value = false;
    };
    const loadMoreHandle = () => {
      to.value = to.value + 7;
    };
    const deleteReviewHandler = () => refresh();
    const developmentModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBreadcrumb = _sfc_main$6;
      const _component_UButton = _sfc_main$8;
      const _component_ReviewCard = __nuxt_component_2;
      const _component_ReviewCardSkeleton = __nuxt_component_3;
      const _component_UModal = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 min-h-screen p-4 lg:pr-4 flex flex-col space-y-9" }, _attrs))}><div class="p-4">`);
      _push(ssrRenderComponent(_component_UBreadcrumb, { items: [
        {
          label: "Home",
          to: "/"
        },
        {
          label: "Reviews",
          to: "/reviews"
        }
      ] }, {
        separator: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mx-2 text-muted"${_scopeId}>/</span>`);
          } else {
            return [
              createVNode("span", { class: "mx-2 text-muted" }, "/")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-[#021526] md:bg-[#03101d] p-2 sticky top-16 z-20 mt-4"><div class="flex flex-col md:flex-row justify-between items-end md:items-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        onClick: openReviewModal,
        icon: "i-lucide-plus",
        size: "sm",
        color: "secondary",
        variant: "solid",
        class: "cursor-pointer w-full md:w-auto text-xs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Write a review`);
          } else {
            return [
              createTextVNode(" Write a review")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="text-xs mt-1 md:mt-0 order-1 md:order-0">Reviews <span class="text-secondary">${ssrInterpolate(unref(count))} total</span></h2></div></div><div class="flex flex-col space-y-3 py-4"><!--[-->`);
      ssrRenderList(unref(reviews), (review) => {
        _push(ssrRenderComponent(_component_ReviewCard, {
          key: review.id,
          id: review.id,
          reviewed_by: review.reviewed_by,
          likes: review.likes,
          message: review.message,
          onDelete: deleteReviewHandler
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (unref(status) === "pending") {
        _push(ssrRenderComponent(_component_ReviewCardSkeleton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        style: unref(count) > unref(to) ? null : { display: "none" },
        onClick: loadMoreHandle,
        loading: unref(status) === "pending",
        disabled: unref(status) === "pending",
        size: "lg",
        color: "primary",
        variant: "solid",
        class: "w-64 flex justify-center cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Load More `);
          } else {
            return [
              createTextVNode("Load More ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(ReviewForm, { onSubmit: submitReviewHandler }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, { open: unref(developmentModal) }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4"${_scopeId}><h2 class="mb-1"${_scopeId}>Notice</h2><p class="mb-3 text-sm text-gray-400"${_scopeId}>Server endpoints on Netlify are having issues. Reviews page is in development mode.</p><div class="flex space-x-4 justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "text-primary underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back to home`);
                } else {
                  return [
                    createTextVNode("Back to home")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              onClick: () => developmentModal.value = false,
              size: "sm",
              color: "error",
              variant: "solid",
              class: "flex cursor-pointer"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Close `);
                } else {
                  return [
                    createTextVNode(" Close ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4" }, [
                createVNode("h2", { class: "mb-1" }, "Notice"),
                createVNode("p", { class: "mb-3 text-sm text-gray-400" }, "Server endpoints on Netlify are having issues. Reviews page is in development mode."),
                createVNode("div", { class: "flex space-x-4 justify-end" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "text-primary underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back to home")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    onClick: () => developmentModal.value = false,
                    size: "sm",
                    color: "error",
                    variant: "solid",
                    class: "flex cursor-pointer"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Close ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reviews/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DADyDY1l.mjs.map
